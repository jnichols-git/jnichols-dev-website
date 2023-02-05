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

function stateGallery(desc: ImageSetDesc) : [JSX.Element, () => void, () => void, () => void] {
     // current image handling
     const [idx, inc, dec, rst] = useIncrementBounded(desc.srcs.length);
     // fade handling
     const [fadeLock, setFadeLock] = React.useState(false);
     const [fadeIn, setFadeIn] = React.useState(true);
     // fadeExpr must be duration-${fadeTime*2}. Not all classes are included in duration, be sure to check docs if changing.
     const fadeExpr = 'duration-1000'
     const fadeTime = 1000;
 
     // swap handler; fade out for fadeTime, then swap the url in place and fade back in for fadeTime
     // pass through if desc is a single image
     let incFade = () => {
        if(desc.srcs.length <= 1) {
            return;
        }
        if(fadeLock) { return; }
        setFadeLock(true);
        setFadeIn(false);
        setTimeout(()=>{
            inc();
            setTimeout(()=>{
                setFadeIn(true);
                setTimeout(()=>{
                    setFadeLock(false);
                }, fadeTime)
            }, 300);
        }, fadeTime);
     }
     let decFade = () => {
        if(desc.srcs.length <= 1) {
            return;
        }
        if(fadeLock) { return; }
        setFadeLock(true);
        setFadeIn(false);
        setTimeout(()=>{
            dec();
            setTimeout(()=>{
                setFadeIn(true);
                setTimeout(()=>{
                    setFadeLock(false);
                }, fadeTime)
            }, 300);
        }, fadeTime);
     }

     let img = imageFrom(desc, idx, {className:`transition-all rounded-md ${fadeExpr} ${fadeIn ? "opacity-100" : "opacity-0"}`})
     // element
     return [(
         <div style={{
             minWidth: desc.fixedWidth,
             height: desc.fixedHeight,
         }}>
             {img}
         </div>
     ), incFade, decFade, rst]
}

export function TimedGallery(
    {desc, interval}:
    {desc: ImageSetDesc, interval: number}
): JSX.Element {
    // current image handling
    let [gallery, inc, dec, rst] = stateGallery(desc);
    // const [idx, inc, dec, rst] = useIncrementBounded(desc.srcs.length);
    // fade handling
    const [fadeIn, setFadeIn] = React.useState(true);
    // fadeExpr must be duration-${fadeTime*2}. Not all classes are included in duration, be sure to check docs if changing.
    const fadeExpr = 'duration-1000'
    const fadeTime = 1000;

    // swap handler; fade out for fadeTime, then swap the url in place and fade back in for fadeTime
    // pass through if desc is a single image
    React.useEffect(()=>{
        // Swap on interval
        const timer = setInterval(()=>{
            inc();
        }, interval)
        return () => clearInterval(timer)
    }, [])

    //let img = imageFrom(desc, idx, {className:`transition-all rounded-md ${fadeExpr} ${fadeIn ? "opacity-100" : "opacity-0"}`})
    // element
    return gallery;
}
