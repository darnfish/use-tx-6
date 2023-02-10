"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTX6Attributes = exports.useTX6Attribute = void 0;
const react_1 = require("react");
const zustand_1 = require("zustand");
const eventemitter3_1 = __importDefault(require("eventemitter3"));
const events_1 = __importDefault(require("./events"));
const useStore = (0, zustand_1.create)((set) => ({
    tx6: null,
    setTX6: tx6 => set({ tx6 })
}));
const SERVICE_UUID = '03B80E5A-EDE8-4B33-A751-6CE34EC4C700'.toLowerCase();
const CHARACTERISTIC_UUID = '7772E5DB-3868-4112-A1A9-F2669D106BF3'.toLowerCase();
function useTX6() {
    const [tx6] = (0, react_1.useState)(new eventemitter3_1.default());
    const [error, setError] = (0, react_1.useState)();
    const [status, setStatus] = (0, react_1.useState)('disconnected');
    const setTX6 = useStore(state => state.setTX6);
    const deviceRef = (0, react_1.useRef)();
    const serverRef = (0, react_1.useRef)();
    const serviceRef = (0, react_1.useRef)();
    const characteristicRef = (0, react_1.useRef)();
    const connect = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        setError(undefined);
        setStatus('connecting');
        try {
            if (!navigator.bluetooth)
                throw new Error('Browser does not support WebBluetooth');
            // Request MIDI device
            deviceRef.current = yield navigator.bluetooth.requestDevice({ filters: [{ services: [SERVICE_UUID] }] });
            if (!deviceRef.current.gatt)
                throw new Error('No GATT server found');
            // Add disconnected callback
            deviceRef.current.addEventListener('gattserverdisconnected', onGATTServerDisconnected);
            // Connect to GATT server
            serverRef.current = yield deviceRef.current.gatt.connect();
            // Get service
            const [service] = yield serverRef.current.getPrimaryServices();
            serviceRef.current = service;
            // Get characteristic
            const [characteristic] = yield serviceRef.current.getCharacteristics(CHARACTERISTIC_UUID);
            characteristicRef.current = characteristic;
            // Add value listener
            characteristicRef.current.addEventListener('characteristicvaluechanged', onCharacteristicValueChanged);
            // Start value listener
            yield characteristicRef.current.startNotifications();
            // Update status
            setStatus('connected');
        }
        catch (error) {
            setError(error);
            setStatus('disconnected');
        }
    }), []);
    const onCharacteristicValueChanged = (0, react_1.useCallback)(event => {
        // Get midi event type
        const dv = event.target.value;
        const midiEvent = dv.getUint16(3);
        // Decode and dispatch thru TX6 emitter
        const _a = events_1.default[midiEvent], { event: eventName } = _a, parameters = __rest(_a, ["event"]);
        tx6.emit(eventName, parameters);
    }, []);
    const onGATTServerDisconnected = (0, react_1.useCallback)(() => {
        var _a;
        // Remove event listener
        (_a = deviceRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('gattserverdisconnected', onGATTServerDisconnected);
        // Reset state
        setError(undefined);
        setStatus('disconnected');
        deviceRef.current = undefined;
        serverRef.current = undefined;
        serviceRef.current = undefined;
        characteristicRef.current = undefined;
    }, []);
    (0, react_1.useEffect)(() => {
        setTX6(tx6);
    }, [tx6]);
    return {
        error,
        status,
        connect
    };
}
exports.default = useTX6;
function useTX6Attribute(event) {
    const tx6 = useStore(state => state.tx6);
    const [params, setParams] = (0, react_1.useState)({});
    const onCallback = (0, react_1.useCallback)(setParams, [tx6, event]);
    (0, react_1.useEffect)(() => {
        if (!tx6)
            return;
        tx6.addListener(event, onCallback);
        return () => {
            tx6.removeListener(event, onCallback);
        };
    }, [tx6, event]);
    return params;
}
exports.useTX6Attribute = useTX6Attribute;
function useTX6Attributes(events) {
    return events.map(event => useTX6Attribute(event));
}
exports.useTX6Attributes = useTX6Attributes;
//# sourceMappingURL=index.js.map