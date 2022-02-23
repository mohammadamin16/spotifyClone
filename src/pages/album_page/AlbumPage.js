import template from "./template";
import albumCover from "../../images/albumcover2.png"
import hanszimmer from "../../images/hans-zimmer.jpeg"
import heart_icon from "../../images/heart.png"
import download_icon from "../../images/download-icon.png"
import more_icon from "../../images/more.png"

import play_icon from "../../images/play-icon.png"
import shuffle_icon from "../../images/shuffle-icon.png"
import {Track} from "../../components/track/Track";
import {getCollectionByIndex} from "../../api";
import FastAverageColor from "fast-average-color";


export function AlbumPage(collection_index) {
    let album_page = document.createElement("div")
    album_page.innerHTML = template
    album_page.className = "album_page"
    const collection_data_api = getCollectionByIndex(collection_index)
    const album_data_api = collection_data_api['album']
    const songs_data_api = collection_data_api['musics']

    const fac = new FastAverageColor();
    // album_page.querySelector('.cover').setAttribute('crossOrigin', 'Anonymous')
    fac.getColorAsync(album_page.querySelector('img.cover')).then(color => {
        // album_page.querySelector('.fade').style.background = color.rgb
        console.log(color)
    }).catch((e) => {
        console.log(e)
    })

    album_page.querySelector('.album_title').innerText = album_data_api['album_name']
    album_page.querySelector('.name').innerText = album_data_api['album_composer']
    album_page.querySelector('.type').innerText = album_data_api['album_genre']

    album_page.querySelector('.cover').setAttribute('src', album_data_api['album_thumb'])
    album_page.querySelector('.avatar').setAttribute("src", hanszimmer)

    album_page.querySelector('.heart').setAttribute("src", heart_icon)
    album_page.querySelector('.download').setAttribute("src", download_icon)
    album_page.querySelector('.more').setAttribute("src", more_icon)

    album_page.querySelector('.play-icon').setAttribute("src", play_icon)
    album_page.querySelector('.shuffle-icon').setAttribute("src", shuffle_icon)

    let track_container = album_page.querySelector(".track_container")
    if (songs_data_api) {
        for (let i = 0; i < songs_data_api.length; i++) {
            let t = Track(songs_data_api[i], collection_index, i)
            // console.log(songs_data_api[i])
            track_container.append(t)
        }
    }

    return album_page
}