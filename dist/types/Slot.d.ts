import React from 'react';
export declare type SlotProps = React.PropsWithChildren<any> & {
    name: string;
};
/**
 * Provides children to a component's slots.
 *
 * @param {string} name - The name of the slot
 *
 * @component
 * @example
 * ```tsx
 * export default function () {
 *     return (
 *         <MyComponent>
 *             <Slot name="foo"><span>foo</span></Slot>
 *             <Slot name="bar"><span>bar</span></Slot>
 *             <span>baz</span>
 *         </MyComponent>
 *     )
 * })
 * ```
 */
export default function Slot(props: SlotProps): JSX.Element;
export declare type Slots = {
    [key: string]: any;
};
/**
 * Finds root-level instances of slot components and maps their children to an object.
 *
 * @param {any} children - Component children
 *
 * @return {Slots} Object of children mapped to slot names
 *
 * @example
 * ```tsx
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
 * ```
 */
export declare function findSlots(children: SlotProps['children']): Slots;
