# intersection-observer

>

[![NPM](https://img.shields.io/npm/v/intersection-observer.svg)](https://www.npmjs.com/package/intersection-observer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save intersection-observer
```

## Use case
In infinite scrolling you can monitor when scroll footer is in viewport. Also it can use to control the re-rendering of component which are not visible in view ports by controlling unnecessary state update
```jsx
useEffect(()=>{
    if(isVisible){
        setValue(true)
    }
},[depState])
```
## Usage

```jsx
import React, { useRef } from 'react'
import { useIntersectionObserver } from 'intersection-observer'

const GetView = () => {
  const ref = useRef()
  const option = {
    root: null,
    target: ref,
    active: true,
    threshold: 0,
    rootMargin: "0px"
  }
  const [isVisiable] = useIntersectionObserver(option)
  return (
    <div ref={ref}>{isVisiable ? "In Viewport" : "Not in Viewport"}</div>
  )
}
```
### Options
  root: (*Optional*) Default value is <span style="color:orange">null</span>, The Element or Document whose bounds are used as the bounding box.

target: (*Required*) Reference (ref) of element whose visibility within the root is to be monitored.

active: (*Optional*) Type Boolean. <span style="color:red">false</span> deactivate monitoring.

threshold: (*Optional*) Type Number.

rootMargin: (*Optional*) Type String Each side of the rectangle represented by rootMargin is added to the corresponding side in the root element's bounding box before the intersection test is performed.

## License

MIT © [bnayak0225](https://github.com/bnayak0225)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
