'use client';
import { useEffect, useRef, useState } from 'react';
import { roofingMedia } from '@/lib/roofline-media';

export function HeroMedia(){
 return <img className="hero-poster" src="/images/cotham-hero-1536.webp" srcSet="/images/cotham-hero-768.webp 768w, /images/cotham-hero-1536.webp 1536w" sizes="100vw" alt="Slate roof and brick chimneys on a British house" width="1536" height="864" fetchPriority="high" loading="eager"/>;
}

const frameUrl=(index:number)=>`/media/frames/roof-${String(index+1).padStart(3,'0')}.webp`;
function roofTime(progress:number){
 const p=Math.max(0,Math.min(6,progress));
 const stage=Math.min(5,Math.floor(p));
 return roofingMedia.stageTimes[stage]+(roofingMedia.stageTimes[stage+1]-roofingMedia.stageTimes[stage])*(p-stage);
}

// A single scroll-directed image sequence. The last complete image remains visible
// while adjacent images decode, including during reverse scrolling on mobile.
export function RoofMedia({progress}:{progress:number}){
 const root=useRef<HTMLDivElement>(null);
 const loaded=useRef(new Map<number,HTMLImageElement>());
 const current=useRef(0);
 const last=useRef(0);
 const [near,setNear]=useState(false);
 const [frame,setFrame]=useState(frameUrl(0));
 useEffect(()=>{
  const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setNear(true);observer.disconnect();}},{rootMargin:'700px'});
  if(root.current)observer.observe(root.current);
  return()=>observer.disconnect();
 },[]);
 useEffect(()=>{
  if(!near)return;
  const index=Math.min(roofingMedia.frameCount-1,Math.round(roofTime(progress)*8));
  const direction=index>=last.current?1:-1;
  current.current=index;last.current=index;
  const load=(i:number)=>{
   if(i<0||i>=roofingMedia.frameCount)return;
   const cached=loaded.current.get(i);
   if(cached){if(i===current.current&&cached.complete&&cached.naturalWidth)setFrame(cached.src);return;}
   const img=new Image();img.decoding='async';loaded.current.set(i,img);
   img.onload=()=>{if(i===current.current)setFrame(img.src);};
   img.onerror=()=>loaded.current.delete(i);
   img.src=frameUrl(i);
  };
  load(index);
  for(let offset=1;offset<=5;offset++)load(index+direction*offset);
  for(let offset=1;offset<=2;offset++)load(index-direction*offset);
  for(const key of loaded.current.keys())if(Math.abs(key-index)>18)loaded.current.delete(key);
 },[progress,near]);
 return <div ref={root} className="roof-media"><img className="roof-frame" src={frame} alt="Roof layers changing with scroll progress" width="688" height="392" loading="lazy"/></div>;
}
