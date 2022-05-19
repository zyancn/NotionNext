import CanvasNest from 'canvas-nest.js'
import React from 'react'

/**
 * 此组件只能用dynamic导入，并禁用SSR，否则会报错。
 * @see https://github.com/hustcc/canvas-nest.js
 *  color: color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
 *  pointColor: color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
 *  opacity: the opacity of line (0~1), default: 0.5.
 *  count: the number of lines, default: 99.
 *  zIndex: z-index property of the background, default: -1.
 * @returns
 */
const CanvasNestComponent = () => {
  const config = {
    color: '0,0,0',
    count: 300,
    opacity: 0.2
  }
  React.useEffect(() => {
    // const element = document.getElementById('__next')
    // const element = document.getElementById('wrapper')
    const element = document.getElementById('canvas-nest')
    const cn = new CanvasNest(element, config)
    console.log('cn', cn)
  }, [])
  return <div id='canvas-nest' style={{ zIndex: '-1' }} className='fixed top-0 h-full w-screen pointer-events-none'/>
  // return <></>
}
export default CanvasNestComponent
