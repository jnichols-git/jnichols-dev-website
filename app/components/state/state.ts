import React from 'react'

export function useIncrement(): [number, () => void, () => void] {
    let [counter, setCounter] = React.useState(0);
    let increment = () => {
        setCounter(counter + 1);
    }
    let reset = () => {
        setCounter(0);
    }
    return [counter, increment, reset]
}

export function useIncrementBounded(len: number): [number, () => void, () => void] {
    let [counter, increment, reset] = useIncrement();
    let boundedIncrement = () => {
        counter+1 >= len ? reset() : increment();
    }
    return [counter, boundedIncrement, reset]
}
