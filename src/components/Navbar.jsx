import { useMediaQuery } from "./useMediaQuery";
import { FullMenu } from "./FullMenu";
import { HamburgerMenu } from "./HamburgerMenu";

export function NavBar () {
    const isMobile = useMediaQuery("(max-width: 815px)");
    return !isMobile ? <FullMenu/> : <HamburgerMenu/>
}