import template from "./template";
import option_icon from '../../images/more.png'
import {router} from "../../controller";

export function Track(data, album_id, song_id) {
    let track = document.createElement("div")
    track.innerHTML = template
    track.className = "track"
    track.querySelector('.track-title').innerText = data['track_name']
    track.querySelector('.artists').innerText = data['track_time']
    track.querySelector('.option-icon').setAttribute('src', option_icon)
    track.onclick = () => {
        router.navigate(`player/${album_id}/${song_id}`)
    }

    return track
}