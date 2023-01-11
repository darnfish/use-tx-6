import EventEmitter from 'eventemitter3'
import { useCallback, useEffect, useRef, useState } from 'react'

import TX6, { TX6EventParameters, TX6EventType } from './events'

const SERVICE_UUID = '03B80E5A-EDE8-4B33-A751-6CE34EC4C700'.toLowerCase()
const CHARACTERISTIC_UUID = '7772E5DB-3868-4112-A1A9-F2669D106BF3'.toLowerCase()

export default function useTX6() {
	const [tx6] = useState(new EventEmitter<TX6EventType, TX6EventParameters>())
	const [error, setError] = useState<Error>()
	const [status, setStatus] = useState('disconnected')

	const deviceRef = useRef<BluetoothDevice>()
	const serverRef = useRef<BluetoothRemoteGATTServer>()
	const serviceRef = useRef<BluetoothRemoteGATTService>()
	const characteristicRef = useRef<BluetoothRemoteGATTCharacteristic>()

	const connect = useCallback(async () => {
		setStatus('connecting')

		try {
			deviceRef.current = await navigator.bluetooth.requestDevice({ filters: [{ services: [SERVICE_UUID] }] })
			if(!deviceRef.current.gatt)
				throw new Error('No GATT server found')

			serverRef.current = await deviceRef.current.gatt.connect()

			const [service] = await serverRef.current.getPrimaryServices()
			serviceRef.current = service

			const [characteristic] = await serviceRef.current.getCharacteristics(CHARACTERISTIC_UUID)
			characteristicRef.current = characteristic

			characteristicRef.current.addEventListener('characteristicvaluechanged', onCharacteristicValueChanged)

			await characteristicRef.current.startNotifications()

			setStatus('connected')
		} catch(error) {
			setError(error)
			setStatus('disconnected')
		}
	}, [])

	const onCharacteristicValueChanged = useCallback(event => {
		const dv = event.target.value as DataView
		const midiEvent = dv.getUint16(3)

		const { event: eventName, ...parameters } = TX6[midiEvent]

		tx6.emit(eventName, parameters)
	}, [])

	return {
		tx6,

		error,
		status,
		connect
	}
}

export function useTX6Attribute(tx6: EventEmitter, event: TX6EventType) {
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

export function useTX6Attributes(tx6: EventEmitter, events: TX6EventType[]) {
	return events.map(event => useTX6Attribute(tx6, event))
}
