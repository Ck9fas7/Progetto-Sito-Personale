import { Immage } from '../Immage'
import { useMediaQuery } from "../utilis/useMediaQuery";
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
        </div>
        <div className="project-text">
            <p>{desc}</p>
        </div>
    </div>
    </>
}