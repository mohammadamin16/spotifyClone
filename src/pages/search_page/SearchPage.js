import {template} from "./template";

import camera_icon from '../../images/camera.png'
import mic_icon from '../../images/mic_icon.png'
import search_icon from '../../images/search.png'
import {getCollectionByIndex, getSongByIndex, searchInSongs} from "../../api";
import {Track} from "../../components/track/Track";

export function SearchPage() {
    let searchPage = document.createElement("div")
    searchPage.innerHTML = template
    searchPage.className = 'search_page'
    searchPage.querySelector('.search_camera_icon')
        .setAttribute('src', camera_icon)
    searchPage.querySelector('.search_icon')
        .setAttribute('src', search_icon)

    let track_container = searchPage.querySelector('.track_container')
    let songs = []

    let search_input = searchPage.querySelector('.search_input')
    let search_query = search_input.value
    search_input.addEventListener('keyup', (e) => {
        search_query = e.target.value
        console.log(search_query)
        track_container.innerHTML = ""
        if (search_query.length >= 2){
            songs = searchInSongs(search_query)
            for (const song of songs) {
                track_container.append(Track(song, 1, 1))
            }
        }
    })
    searchPage.querySelector('.mic_icon').setAttribute('src', mic_icon)
    const cancel_text = searchPage.querySelector('.search_cancel')
    cancel_text.onclick = () => {
        search_input.value = ""
    }
    return searchPage
}