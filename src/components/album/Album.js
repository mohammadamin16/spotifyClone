import template from "./template";
import {albumPage, goToPage, searchPage} from "../../controller";
import {router} from "../../controller";

export function Album(title, cover, album_index){
    let album = document.createElement("div")
    album.className = "album"
    album.innerHTML = template

    album.querySelector(".icon").setAttribute("src", cover)
    album.querySelector(".title-album").innerText = title
    // console.log(album_id)
    album.addEventListener("click", () => {
        router.navigate(`album/${album_index}`)
    })


    return album
}