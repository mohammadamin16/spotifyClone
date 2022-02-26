import template from "./template";
import Icon from "../icon/Icon";

import home_icon from "../../images/home.png"
import search_icon from "../../images/search.png"
import library_icon from "../../images/library.png"
import {goToPage, homePage, router, searchPage} from "../../controller";

export function Menu(){
    let menu = document.createElement("div")
    menu.className = "menu"
    menu.innerHTML = template

    const home_click_handler = () => {
        router.navigate("home")
    }

    const search_click_handler = () => {
        router.navigate("search")
    }

    const library_click_handler = () => {
        router.navigate("library")
    }


    let home = Icon("Home", home_icon, home_click_handler)
    let search = Icon("Search", search_icon, search_click_handler)
    let library = Icon("Library", library_icon, library_click_handler)

    menu.append(home)
    menu.append(search)
    menu.append(library)
    return menu
}