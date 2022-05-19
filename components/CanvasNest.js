import React from 'react'
import dynamic from 'next/dynamic'
const ReactCanvasNest = dynamic(() => import('react-canvas-nest'), { ssr: false })
/**
 * @see https://github.com/flyerH/react-canvas-nest
 * @see https://github.com/hustcc/canvas-nest.js
 *  color: color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
 *  pointColor: color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
 *  opacity: the opacity of line (0~1), default: 0.5.
 *  count: the number of lines, default: 99.
 *  zIndex: z-index property of the background, default: -1.
 * @returns
 */
const CanvasNestComponent = () => {
  return <ReactCanvasNest className='react-canvas-nest pointer-events-none'/>
}
export default CanvasNestComponent
