import template from "./template";
import option_icon from '../../images/more.png'
import {router} from "../../controller";
import {getCollectionByIndex} from "../../api";
import like_icon from '../../images/Like.png'

export function Track(data, album_index, song_index, hide_thumb=false) {
    let track = document.createElement("div")
    const album = getCollectionByIndex(album_index)['album']
    track.innerHTML = template
    track.className = "track"
    track.querySelector('.track-title').innerText = data['track_name']
    track.querySelector('.artists').innerText = album['album_composer']
    track.querySelector('.option-icon').setAttribute('src', option_icon)
    track.onclick = () => {
        router.navigate(`player/${album_index}/${song_index}`)
    }
    if (hide_thumb){
        track.querySelector('.song_thumb').style.display = 'none'
    }else{
        track.querySelector('.song_thumb').setAttribute('src', album['album_thumb'])
    }
    const like_btn = track.querySelector('.like_btn')
    like_btn.setAttribute('src', like_icon)
    return track
}