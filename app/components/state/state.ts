import React from 'react'

export function useIncrement(): [number, () => void, () => void, () => void] {
    let [counter, setCounter] = React.useState(0);
    let increment = () => {
        setCounter(counter + 1);
    }
    let decrement = () => {
        setCounter(counter - 1);
    }
    let reset = () => {
        setCounter(0);
    }
    return [counter, increment, decrement, reset]
}

export function useIncrementBounded(len: number): [number, () => void, ()=>void, () => void] {
    let [counter, increment, decrement, reset] = useIncrement();
    let boundedIncrement = () => {
        counter+1 >= len ? reset() : increment();
    }
    let boundedDecrement = () => {
        counter-1 < 0 ? len : decrement();
    }
    return [counter, boundedIncrement, boundedDecrement, reset]
}
