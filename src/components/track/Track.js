import template from "./template";
import option_icon from '../../images/more.png'

export function Track(data) {
    let track = document.createElement("div")
    track.innerHTML = template
    track.className = "track"
    track.querySelector('.track-title').innerText = data['title']
    track.querySelector('.artists').innerText = data['owners']
    track.querySelector('.option-icon').setAttribute('src', option_icon)
    return track
}