import React from 'react';
/**
 * Provides children to a component's slots.
 *
 * @param {string} name - The name of the slot
 *
 * @component
 * @example
 * export default function () {
 *     return (
 *         <MyComponent>
 *             <Slot name="foo"><span>foo</span></Slot>
 *             <Slot name="bar"><span>bar</span></Slot>
 *             <span>baz</span>
 *         </MyComponent>
 *     )
 * })
 */
declare type SlotProps = React.PropsWithChildren<any> & {
    name: string;
};
export default function Slot(props: SlotProps): JSX.Element;
/**
 * Finds root-level instances of slot components and maps their children to an object.
 *
 * @param {any} children - Component children
 *
 * @return {array} Array containing the slot map, and the default slot
 *
 * @example
 * export default function MyComponent ({ children }) {
 *     const slots = findSlots(children)
 *
 *     return (
 *         <div>
 *             <div>{slots.foo}</div>
 *             <div>{slots.bar}</div>
 *             <div>{slots.defaultSlot}</div>
 *         </div>
 *     )
 * })
 */
declare type Slots = {
    [key: string]: any;
};
export declare function findSlots(children: SlotProps['children']): Slots;
export {};
