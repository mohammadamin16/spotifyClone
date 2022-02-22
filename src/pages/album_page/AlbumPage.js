import template from "./template";

export default function AlbumPage(){
    let album_page = document.createElement("div")
    album_page.innerHTML = template

    return album_page
}