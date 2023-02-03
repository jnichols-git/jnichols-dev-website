import React, {useEffect, useState} from "react"
import Image from 'next/image'
import styles from './home.module.css'

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
        <div className="flex flex-col justify-begin">
            <div className={`transition-all duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}>
                <>
                    <h1 className="text-5xl font-bold">{key}</h1>
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

export type ImageDesc = {
    url: string;
    alt: string;
}

export type ImageSetDesc = {
    srcs: ImageDesc[]
    fixedWidth: number
    fixedHeight: number
}

function imageFrom(desc : ImageSetDesc, idx : number, extra : Partial<any> | undefined = undefined) {
    if(idx >= desc.srcs.length) {
        throw "out of range";
    }
    let src = desc.srcs[idx];
    let img = <Image src={src.url} alt={src.alt} key={src.url} width={desc.fixedWidth} height={desc.fixedHeight} placeholder='empty'/>
    if(extra != undefined) {
        img = React.cloneElement(img, extra);
    }
    return img;
}


export function TimedGallery(
    {desc, interval}:
    {desc: ImageSetDesc, interval: number}
): JSX.Element {
    // current image handling
    const [idx, setIdx] = useState(0)
    const incrementIdx = () => {
        setIdx((prev)=>{
            if(prev+1 >= desc.srcs.length) {
                return 0;
            } else {
                return prev+1;
            }
        })
    }
    // fade handling
    const [fadeIn, setFadeIn] = useState(true);
    // fadeExpr must be duration-${fadeTime*2}. Not all classes are included in duration, be sure to check docs if changing.
    const fadeExpr = 'duration-1000'
    const fadeTime = 1000;

    // swap handler; fade out for fadeTime, then swap the url in place and fade back in for fadeTime
    // pass through if desc is a single image
    const swap = () => {
        if(desc.srcs.length <= 1) {
            return;
        }
        setFadeIn(false);
        setTimeout(()=>{
            incrementIdx();
            setTimeout(()=>{
                setFadeIn(true);
            }, 300);
        }, fadeTime);
    }
    useEffect(()=>{
        // Swap on interval
        const timer = setInterval(()=>{
            swap();
        }, interval)
        return () => clearInterval(timer)
    }, [])

    let img = imageFrom(desc, idx, {className:`transition-all ${fadeExpr} ${fadeIn ? "opacity-100" : "opacity-0"}`})
    // element
    return (
        <div style={{
            minWidth: desc.fixedWidth,
            height: desc.fixedHeight,
        }}>
            {img}
        </div>
    )
}
