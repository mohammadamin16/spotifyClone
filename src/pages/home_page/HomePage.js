import template from "./template";
import Album from "../../components/album/Album";
import album_cover1 from "../../images/album-icon1.png"
export default function HomePage(){
    let page = document.createElement("div")
    page.className = "homepage"
    page.innerHTML = template

    let album_container = page.querySelector('.album-container')
    let album1 = Album("title1", album_cover1)
    let album2 = Album("title1", album_cover1)
    let album3 = Album("title1", album_cover1)
    let album4 = Album("title1", album_cover1)
    let album5 = Album("title1", album_cover1)
    let album6 = Album("title1", album_cover1)

    album_container.append(album1)
    album_container.append(album2)
    album_container.append(album3)
    album_container.append(album4)
    album_container.append(album5)
    album_container.append(album6)

    return page
}