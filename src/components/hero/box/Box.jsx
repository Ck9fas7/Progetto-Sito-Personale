import { Handler } from './Handler'
import { Draggable } from '../../utilis/useDragg'
import fouad1 from '../../../assets/PXL_20260530_024417425.jpg'
import fouad2 from '../../../assets/PXL_20260816_142010259.jpg'
import './box.css'
 
export function Box (){
    const { pos, bind, ref } = Draggable();
    return(
    <>
    <div className="box" 
        style={{ '--pos': `${pos}%` }}
        ref={ref} 
        {...bind}>
        <div className="layer base"><img src={fouad1} alt="" /></div>
        <div className="layer top"><img src={fouad2} alt="" /></div>
        <Handler pos={pos}/>
    </div>
    </>
    )
}