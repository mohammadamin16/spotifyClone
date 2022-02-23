import template from "./template";
import {Album} from "../../components/album/Album";
import album_cover1 from "../../images/album-icon1.png"
import {getAlbums} from "../../api";
export default function HomePage(){
    let page = document.createElement("div")
    page.className = "homepage"
    page.innerHTML = template

    let album_container = page.querySelector('.album-container')
    let albums = getAlbums()

    for (let i=0; i<albums.length; i++){
        album_container.append(Album(albums[i]['album_name'], albums[i]['album_thumb'], i))
    }


    return page
}