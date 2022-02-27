import {template} from "./template";
import {getCollectionByIndex} from "../../api";
import {Track} from "../../components/track/Track";
import {get_all_fav_song} from "../../db_handler";

export function LibraryPage() {
    let libraryPage = document.createElement("div")
    libraryPage.className = 'library_page'
    libraryPage.innerHTML = template

    let isDownloading = true
    let track_container = libraryPage.querySelector('.track_container')
    const download_switch = libraryPage.querySelector('.download_switch')
    const download_msg = libraryPage.querySelector('.download_msg')
    get_all_fav_song((tracks) => {
        tracks.forEach(t => {
            track_container.append(Track(t, t['album_index'], t['song_index']))
        })

    })
    toggleDownload()
    function toggleDownload() {
        if (isDownloading === true) {
            download_switch.classList.remove('on')
            download_switch.classList.add('off')
            download_msg.innerText = ''
            isDownloading = false
        } else {
            download_switch.classList.remove('off')
            download_switch.classList.add('on')
            download_msg.innerText = 'Downloading...'
            isDownloading = true
        }
    }

    download_switch.addEventListener('click', (e) => {
        toggleDownload()
    })

    return libraryPage
}