import React from "react"

export default function withTimer(callback: () => void, interval: number) {
    React.useEffect(()=> {
        setInterval(()=>{
            callback();
        }, interval)
    }, [])
}