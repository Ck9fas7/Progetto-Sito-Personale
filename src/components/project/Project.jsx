import { Immage } from '../Immage'
import { useMediaQuery } from "../utilis/useMediaQuery";
import fouad1 from '../../assets/PXL_20260530_024417425.jpg'
import './project.css'
import '../image.css'

export function Project ({title, img1, desc}) {
    const isMobile = useMediaQuery("(max-width: 815px)");
    return !isMobile ? 
    <><div className="project">
        <div className="project-text">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div className="project-img">
            <Immage img={fouad1}/>
        </div>
    </div>
    </> 
    : 
    <>
    <div className="project">
        <div className="project-text">
            <h3>{title}</h3>
        </div>
        <div className="project-img">
            <Immage img={fouad1}/>
        </div>
        <div className="project-text">
            <p>{desc}</p>
        </div>
    </div>
    </>
}