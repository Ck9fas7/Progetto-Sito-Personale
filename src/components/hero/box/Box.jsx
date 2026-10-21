import { Handler } from './Handler'
import { Draggable } from '../../utilis/useDragg'
import imm1 from '../../../assets/imm1.png'
import imm2 from '../../../assets/imm2.png'
import './box.css'
 
export function Box (){
    const { pos, bind, ref } = Draggable();
    return(
    <>
    <div className="box" 
        style={{ '--pos': `${pos}%` }}
        ref={ref} 
        {...bind}>
        <div className="layer base"><img src={imm1} alt="" /></div>
        <div className="layer top"><img src={imm2} alt="" /></div>
        <Handler pos={pos}/>
    </div>
    </>
    )
}