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
    let results = null

    let search_input = searchPage.querySelector('.search_input')
    let search_query = search_input.value
    search_input.addEventListener('keyup', (e) => {
        search_query = e.target.value
        track_container.innerHTML = ""
        if (search_query.length >= 2){
            results = searchInSongs(search_query)
            for (const result of results) {
                track_container.append(Track(result[0], result[1], result[2]))
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