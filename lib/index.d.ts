import { TX6EventParameters, TX6EventType } from './events';
type TX6ConnectionStatus = 'disconnected' | 'connecting' | 'connected';
export default function useTX6(): {
    error: Error | undefined;
    status: TX6ConnectionStatus;
    connect: () => Promise<void>;
};
export declare function useTX6Attribute(event: TX6EventType): TX6EventParameters;
export declare function useTX6Attributes(events: TX6EventType[]): TX6EventParameters[];
export {};
