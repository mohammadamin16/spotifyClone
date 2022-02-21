import template from "./template";

export default function SearchPage(){
    let page = document.createElement("div")
    page.innerHTML = template

    return page
}