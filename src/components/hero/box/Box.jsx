import { Handler } from './Handler'
import { Draggable } from '../../utilis/useDragg'
import './box.css'
 
export function Box (){
    const { pos, bind, ref } = Draggable();
    return(
    <>
    <div className="box" 
        style={{ '--pos': `${pos}%` }}
        ref={ref} 
        {...bind}>
        <div className="layer base">iodsjfodifdsgsdfsdgsdsa</div>
        <div className="layer top">fdsjhdshdsuiahdswuah</div>
        <Handler pos={pos}/>
    </div>
    </>
    )
}