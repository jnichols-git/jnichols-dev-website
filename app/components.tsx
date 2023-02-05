import React, {useEffect, useState} from "react"
import Image from 'next/image'
import styles from './home.module.css'
import { classHeader } from "./style/text"

export function CardGridContent(
    {contents, conv}:
    {contents: any[], conv: (arg0: any) => JSX.Element}
) {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-4">
            {contents.map(conv)}
        </div>
    )
}

export function KeyedContent(
    {keys, contents}:
    {keys: string[], contents: React.ReactNode[]}
) {
    const [navIndex, setNavIndex] = useState(0)
    const [contentIndex, setContentIndex] = useState(0)

    let key = keys[contentIndex]
    let content = contents[contentIndex]

    const [canSwap, setCanSwap] = useState(true)
    const [fade, setFade] = useState(true)
    const [swapTimer, setSwapTimer] = useState<NodeJS.Timeout>()

    const handleSwap = (toIndex : number) => {
        if(!canSwap) {return}
        setNavIndex(toIndex)
        setCanSwap(false)
        setFade(false)
        setSwapTimer(setTimeout(
            () => {
                setContentIndex(toIndex)
                setFade(true)
                setTimeout(()=>{setCanSwap(true)}, 500)
            },
            500,
        ))
    }

    return (
        <div className="flex flex-col justify-center lg:justify-start">
            <div className={`transition-all duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}>
                <>
                    <h1>{key}</h1>
                    {content}
                </>
            </div>
            <div className="flex justify-center lg:justify-start">
                <div className="btn-group">
                    {keys.map((mappedKey)=>{
                        if(mappedKey!=keys[navIndex]) {
                            return(<button key={mappedKey} className="btn" onClick={()=>handleSwap(keys.indexOf(mappedKey))}>{mappedKey}</button>)
                        } else {
                            return (<button key={mappedKey} className="btn btn-active">{mappedKey}</button>)
                        }
                    })}
                </div>
            </div>
        </div>
    )
}