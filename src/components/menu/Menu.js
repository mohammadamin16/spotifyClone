import template from "./template";
import Icon from "../icon/Icon";

import home_icon_deactive from "../../images/home_deactive.png"
import search_icon_deactive from "../../images/search_deactive.png"
import library_icon_deactive from "../../images/library_deactive.png"

import home_icon_active from "../../images/home_active.png"
import search_icon_active from "../../images/search_active.png"
import library_icon_active from "../../images/library_active.png"


import {router} from "../../controller";

export function Menu(active_tab) {
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


    let home = Icon("Home", home_icon_deactive, home_click_handler)
    let search = Icon("Search", search_icon_deactive, search_click_handler)
    let library = Icon("Library", library_icon_deactive, library_click_handler)
    if (active_tab === 'search') {
        search = Icon("Search", search_icon_active, search_click_handler)
    } else if (active_tab === 'library') {
        library = Icon("Library", library_icon_active, library_click_handler)
    } else {
        home = Icon("Home", home_icon_active, home_click_handler)
    }


    menu.append(home)
    menu.append(search)
    menu.append(library)
    return menu
}