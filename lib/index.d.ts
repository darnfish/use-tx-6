import EventEmitter from 'eventemitter3';
import { TX6EventParameters, TX6EventType } from './events';
export default function useTX6(): {
    tx6: EventEmitter<TX6EventType, TX6EventParameters>;
    error: Error | undefined;
    status: string;
    connect: () => Promise<void>;
};
export declare function useTX6Attribute(event: TX6EventType): TX6EventParameters;
export declare function useTX6Attributes(events: TX6EventType[]): TX6EventParameters[];
