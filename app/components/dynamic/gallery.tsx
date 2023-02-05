import React from 'react';
import Image from 'next/image'

import { useIncrementBounded } from '../state/state';

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
    const [idx, inc, dec, rst] = useIncrementBounded(desc.srcs.length)
    // fade handling
    const [fadeIn, setFadeIn] = React.useState(true);
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
            inc();
            setTimeout(()=>{
                setFadeIn(true);
            }, 300);
        }, fadeTime);
    }
    React.useEffect(()=>{
        // Swap on interval
        const timer = setInterval(()=>{
            swap();
        }, interval)
        return () => clearInterval(timer)
    }, [])

    let img = imageFrom(desc, idx, {className:`transition-all rounded-md ${fadeExpr} ${fadeIn ? "opacity-100" : "opacity-0"}`})
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
