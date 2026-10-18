import { ImageMarquee } from '../utilis/ImageMarquee'
import logo1 from '../../assets/icons8-javascript-48.png'
import logo2 from '../../assets/icons8-c-+-+-50.png'
import logo3 from '../../assets/icons8-html-5-50.png'
import logo4 from '../../assets/icons8-python-48.png'
import logo5 from '../../assets/icons8-react-native-48.png'
import logo6 from '../../assets/icons8-sql-48.png'
import logo7 from '../../assets/icons8-tazza-del-logo-java-48.png'
import logo8 from '../../assets/GitHub_Invertocat_Logo.svg'



export function ImageMarq({text}) {
    return (
        <>
            <ImageMarquee images={[logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8]}/>
        </>
    )
}