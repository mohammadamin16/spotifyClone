import template from "./template";
import home_icon from "../../images/home.png"
import search_icon from "../../images/search.png"
import library_icon from "../../images/library.png"

export default function Icon(role){
    let icon = document.createElement("div")
    icon.innerHTML = template
    icon.querySelector('.title').innerHTML = role


    if (role === "home"){
        icon.querySelector(".icon-image").setAttribute("src", home_icon)
    }else if (role === "search"){
        icon.querySelector(".icon-image").setAttribute("src", search_icon)
    }else{
        icon.querySelector(".icon-image").setAttribute("src", library_icon)
    }




    return icon
}