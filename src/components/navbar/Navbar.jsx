import { useMediaQuery } from "../utilis/useMediaQuery";
import { FullMenu } from "./FullMenu";
import { HamburgerMenu } from "./HamburgerMenu";
import "./navbar.css"

export function NavBar () {
    const isMobile = useMediaQuery("(max-width: 815px)");
    return !isMobile ? <FullMenu/> : <HamburgerMenu/>
}