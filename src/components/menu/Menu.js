import template from "./template";
import Icon from "../icon/Icon";

import home_icon from "../../images/home.png"
import search_icon from "../../images/search.png"
import library_icon from "../../images/library.png"
import {goToPage, homePage, searchPage} from "../../controller";

export default function Menu(){
    let menu = document.createElement("div")
    menu.className = "menu"
    menu.innerHTML = template



    const home_click_handler = () => {
        goToPage(homePage)
    }

    const search_click_handler = () => {
        goToPage(searchPage)
    }

    const library_click_handler = () => {
        alert("Libray")
        // goToPage()
    }


    let home = Icon("home", home_icon, home_click_handler)
    let search = Icon("search", search_icon, search_click_handler)
    let library = Icon("library", library_icon, library_click_handler)

    menu.append(home)
    menu.append(search)
    menu.append(library)
    return menu
}