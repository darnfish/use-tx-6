import { useCallback, useEffect, useRef, useState } from 'react'

import { create } from 'zustand'
import EventEmitter from 'eventemitter3'

import TX6, { TX6EventParameters, TX6EventType } from './events'

type TX6Emitter = EventEmitter<TX6EventType, TX6EventParameters>
type TX6ConnectionStatus = 'disconnected' | 'connecting' | 'connected'

interface TX6State {
  tx6: TX6Emitter | null
  setTX6: (tx6: TX6Emitter) => void
}

const useStore = create<TX6State>((set) => ({
	tx6: null,
	setTX6: tx6 => set({ tx6 })
}))

const SERVICE_UUID = '03B80E5A-EDE8-4B33-A751-6CE34EC4C700'.toLowerCase()
const CHARACTERISTIC_UUID = '7772E5DB-3868-4112-A1A9-F2669D106BF3'.toLowerCase()

export default function useTX6() {
	const [tx6] = useState(new EventEmitter<TX6EventType, TX6EventParameters>())
	const [error, setError] = useState<Error>()
	const [status, setStatus] = useState<TX6ConnectionStatus>('disconnected')

	const setTX6 = useStore(state => state.setTX6)

	const deviceRef = useRef<BluetoothDevice>()
	const serverRef = useRef<BluetoothRemoteGATTServer>()
	const serviceRef = useRef<BluetoothRemoteGATTService>()
	const characteristicRef = useRef<BluetoothRemoteGATTCharacteristic>()

	const connect = useCallback(async () => {
		setError(undefined)
		setStatus('connecting')

		try {
			if(!navigator.bluetooth)
				throw new Error('Browser does not support WebBluetooth')

			// Request MIDI device
			deviceRef.current = await navigator.bluetooth.requestDevice({ filters: [{ services: [SERVICE_UUID] }] })
			if(!deviceRef.current.gatt)
				throw new Error('No GATT server found')

			// Add disconnected callback
			deviceRef.current.addEventListener('gattserverdisconnected', onGATTServerDisconnected)

			// Connect to GATT server
			serverRef.current = await deviceRef.current.gatt.connect()

			// Get service
			const [service] = await serverRef.current.getPrimaryServices()
			serviceRef.current = service

			// Get characteristic
			const [characteristic] = await serviceRef.current.getCharacteristics(CHARACTERISTIC_UUID)
			characteristicRef.current = characteristic

			// Add value listener
			characteristicRef.current.addEventListener('characteristicvaluechanged', onCharacteristicValueChanged)

			// Start value listener
			await characteristicRef.current.startNotifications()

			// Update status
			setStatus('connected')
		} catch(error) {
			setError(error)
			setStatus('disconnected')
		}
	}, [])

	const onCharacteristicValueChanged = useCallback(event => {
		// Get midi event type
		const dv = event.target.value as DataView
		const midiEvent = dv.getUint16(3)

		// Decode and dispatch thru TX6 emitter
		const { event: eventName, ...parameters } = TX6[midiEvent]

		tx6.emit(eventName, parameters)
	}, [])

	const onGATTServerDisconnected = useCallback(() => {
		// Remove event listener
		deviceRef.current?.removeEventListener('gattserverdisconnected', onGATTServerDisconnected)

		// Reset state
		setError(undefined)
		setStatus('disconnected')

		deviceRef.current = undefined
		serverRef.current = undefined
		serviceRef.current = undefined
		characteristicRef.current = undefined
	}, [])

	useEffect(() => {
		setTX6(tx6)
	}, [tx6])

	return {
		error,
		status,
		connect
	}
}

export function useTX6Attribute(event: TX6EventType) {
	const tx6 = useStore(state => state.tx6)
	const [params, setParams] = useState<TX6EventParameters>({})

	const onCallback = useCallback(setParams, [tx6, event])

	useEffect(() => {
		if(!tx6)
			return

		tx6.addListener(event, onCallback)

		return () => {
			tx6.removeListener(event, onCallback)
		}
	}, [tx6, event])

	return params
}

export function useTX6Attributes(events: TX6EventType[]) {
	return events.map(event => useTX6Attribute(event))
}
