import Menu from "./components/menu/Menu";
import {addToScreen, goToPage, homePage, menu, searchPage} from "./controller";




function init() {
    goToPage(homePage)
    // goToPage(searchPage)
    addToScreen(menu)
}

init()


