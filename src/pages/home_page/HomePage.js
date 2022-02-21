import template from "./template";

export default function HomePage(){
    let page = document.createElement("div")
    page.innerHTML = template

    return page
}