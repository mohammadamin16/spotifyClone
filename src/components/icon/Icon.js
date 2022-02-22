import template from "./template";


export default function Icon(role, image, click_handler){
    let icon = document.createElement("div")
    icon.innerHTML = template
    icon.querySelector('.title').innerHTML = role

    icon.querySelector(".icon-image").setAttribute("src", image)

    icon.querySelector(".icon-image").addEventListener("click", click_handler)

    return icon
}