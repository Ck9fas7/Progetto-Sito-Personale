import { Handler } from './Handler'
import { Draggable } from '../../utilis/useDragg'
 
export function Box (){
    const { pos, bind, ref } = Draggable();
    console.log(pos)
    return(
    <>
    <div className="box" 
        style={{ '--pos': `${pos}%` }}
        ref={ref} 
        {...bind}>
        <div className="layer base">ffjshdfisdhgfihdsfhdskfshdifhsk</div>
        <div className="layer top">fouad non dsadfsadsadasdadasd</div>
        <Handler pos={pos}/>
    </div>
    </>
    )
}