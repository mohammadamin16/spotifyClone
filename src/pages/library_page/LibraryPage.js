import {template} from "./template";
import {getCollectionByIndex} from "../../api";
import {Track} from "../../components/track/Track";

export function LibraryPage() {
    let libraryPage = document.createElement("div")
    libraryPage.className = 'library_page'
    libraryPage.innerHTML = template

    let isDownloading = false
    let tracks = getCollectionByIndex(1)['musics']
    let track_container = libraryPage.querySelector('.track_container')
    tracks.forEach(t => {
        track_container.append(Track(t, 1, 1))
    })


    const download_switch = libraryPage.querySelector('.download_switch')
    const download_msg = libraryPage.querySelector('.download_msg')
    download_switch.addEventListener('click', () => {
        if (isDownloading === true) {
            download_switch.classList.remove('on')
            download_switch.classList.add('off')
            download_msg.innerText = ''
            isDownloading = false
        }else{
            download_switch.classList.remove('off')
            download_switch.classList.add('on')
            download_msg.innerText = 'Downloading...'
            isDownloading = true
        }
    })

    return libraryPage
}