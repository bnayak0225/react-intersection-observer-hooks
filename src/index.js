import * as React from 'react'
import {useEffect, useState} from "react";
export const useInsertionObserver=(
  {
    root=null,
    target, active=true,
    threshold=0,
    rootMargin = "0px"
  }
)=> {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(()=> {
    if(target && target.current && active){
      let options = {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold,
      };
      let callback = (entries) => {
        setIsVisible(entries[0].isIntersecting)
      };
      let observer = new IntersectionObserver(callback, options);
      observer.observe(target.current);
    }
  }, [target])
  return [active ? isVisible : null]
}
