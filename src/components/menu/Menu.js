import template from "./template";
import Icon from "../icon/Icon";

export default function Menu(){
    let menu = document.createElement("div")
    menu.className = "menu"
    menu.innerHTML = template

    let home = Icon("home")
    let search = Icon("search")
    let library = Icon("library")

    menu.append(home)
    menu.append(search)
    menu.append(library)
    return menu
}