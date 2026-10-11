import './handler.css'

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