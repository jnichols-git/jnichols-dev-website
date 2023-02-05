import React from 'react'

export function useIncrementBounded(len: number): [number, () => void, ()=>void, () => void] {
    let [counter, setCounter] = React.useState(0);
    let increment = () => {
        setCounter((prev) => {
            return prev + 1 >= len ? 0 : prev + 1;
        });
    }
    let decrement = () => {
        setCounter((prev) => {
            return prev - 1 < 0 ? len-1 : prev-1;
        })
    }
    let reset = () => {
        setCounter(0);
    }
    return [counter, increment, decrement, reset]
}
