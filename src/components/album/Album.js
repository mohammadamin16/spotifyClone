import template from "./template";
import {albumPage, goToPage, searchPage} from "../../controller";

export default function Album(title, cover){
    let album = document.createElement("div")
    album.className = "album"
    album.innerHTML = template

    album.querySelector(".icon").setAttribute("src", cover)
    album.querySelector(".title-album").innerText = title
    album.addEventListener("click", () => {
        goToPage(albumPage)
    })


    return album
}