export type TX6EventType = 'input1.slider' | 'input2.slider' | 'input3.slider' | 'input4.slider' | 'input5.slider' | 'input6.slider' | 'input1.eq1' | 'input2.eq1' | 'input3.eq1' | 'input4.eq1' | 'input5.eq1' | 'input6.eq1' | 'input1.eq2' | 'input2.eq2' | 'input3.eq2' | 'input4.eq2' | 'input5.eq2' | 'input6.eq2' | 'input1.eq3' | 'input2.eq3' | 'input3.eq3' | 'input4.eq3' | 'input5.eq3' | 'input6.eq3' | 'input1.button' | 'input2.button' | 'input3.button' | 'input4.button' | 'input5.button' | 'input6.button' | 'select.encoder' | 'select.button' | 'fx1' | 'fx2' | 'shift' | 'aux' | 'cue';
export type TX6EventMap = {
    [key in number]: TX6Event;
};
export interface TX6Event {
    event: TX6EventType;
    pressed?: boolean;
    progress?: number;
    direction?: 'left' | 'right';
}
export type TX6EventParameters = Omit<TX6Event, 'event'>;
declare const events: TX6EventMap;
export default events;
