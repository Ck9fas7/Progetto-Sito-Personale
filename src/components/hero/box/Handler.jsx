import {Draggable} from '../../utilis/useDragg'

export function Handler ({pos}){
    return (
    <>
    <div
        className="handle"
        role="slider"
        style={{'--pos': `${pos}%` }}>
        <span>↔</span>
      </div>
    </>
    )
}