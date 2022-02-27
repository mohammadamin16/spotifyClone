import template from "./template";
import option_icon from '../../images/more.png'
import {router} from "../../controller";
import {getCollectionByIndex} from "../../api";
import heart_icon from '../../images/heart.png'
import like_icon from '../../images/Like.png'
import {add_fav, get_fav_song, remove_fav} from "../../db_handler";

export function Track(data, album_index, song_index, hide_thumb = false) {
    let track = document.createElement("div")
    const album = getCollectionByIndex(album_index)['album']
    track.innerHTML = template
    track.className = "track"
    track.querySelector('.track-title').innerText = data['track_name']
    track.querySelector('.artists').innerText = album['album_composer']
    track.querySelector('.option-icon').setAttribute('src', option_icon)
    track.addEventListener('click', (e) => {
        router.navigate(`player/${album_index}/${song_index}`)
    })

    if (hide_thumb) {
        track.querySelector('.song_thumb').style.display = 'none'
    } else {
        track.querySelector('.song_thumb').setAttribute('src', album['album_thumb'])
    }

    get_fav_song(data['id'], like_btn_handler)

    function like_btn_handler(result) {
        const like_btn = track.querySelector('.like_btn')
        result ? like_btn.setAttribute('src', like_icon) : like_btn.setAttribute('src', heart_icon)
        like_btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (result) {
                like_btn.setAttribute('src', like_icon)
                remove_fav(data['id'], like_btn_handler)

            } else {
                like_btn.setAttribute('src', heart_icon)
                add_fav({
                    id: data['id'],
                    album_index: album_index,
                    song_index: song_index,
                    track_name: data['track_name']
                }, like_btn_handler)
            }
        })
    }

    return track
}