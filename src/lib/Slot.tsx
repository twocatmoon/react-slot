import React from 'react'

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

type SlotProps = React.PropsWithChildren<any> & {
    name: string
}

export default function Slot (props: SlotProps) {
    return (
        <React.Fragment key={`slot#${props.name}`}>
            {props.children}
        </React.Fragment>
    )
}

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

type Slots = {
    [key: string]: any
}

export function findSlots (children: SlotProps['children']): Slots {
    if (!children || children.length === 0) return {
        defaultSlot: (<React.Fragment />)
    }

    if (!Array.isArray(children)) children = [children]
    else children = children.slice()

    const childrenArr: any[] = children

    const slots = childrenArr.reduce((slots, child, i) => {
        if (child.type === Slot) {
            if (!child.props.name) throw new Error('Prop "name" is required for Slot.')
            slots[child.props.name] = child.props.children
            childrenArr[i] = null
        }
        return slots
    }, {})
    slots.defaultSlot = childrenArr.filter((child) => child !== null)

    return slots
}
