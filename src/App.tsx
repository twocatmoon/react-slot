import React from 'react'
import './App.css'
import { Slot, findSlots } from './lib'

function ComponentWithSlots ({ children }: React.PropsWithChildren<any>) {
    const slots = findSlots(children)

    return (
        <div>
            <h1>{slots.title}</h1>
            <p>{slots.text}</p>
            {slots.defaultSlot}
        </div>
   )
}

function App () {
    return (
        <div className="App">
            <header className="App-header">
                <p>React Slot</p>
                <ComponentWithSlots>
                    <Slot name='title'>Title</Slot>
                    <Slot name='text'>Lorem ipsum dolor sit amet</Slot>
                    <button>Button</button>
                </ComponentWithSlots>
            </header>
        </div>
    )
}

export default App
