import template from "./template";
import cover from "../../images/albumcover2.png"
import arrow from "../../images/arrow.png"
import option from "../../images/options.png"
import like from "../../images/Like.png"

import next from "../../images/next.png"
import previous from "../../images/previous.png"
import whiteCircle from "../../images/white-circle.png"

import shuffle from "../../images/shuffle-icon.png"

import repeat from "../../images/repeat.png"
import devices from "../../images/devices.png"
import queue from "../../images/queue.png"

function showSeconds(s) {
    let min = Math.floor(s / 60)
    let sec = s - min * 60
    return min + ":" + String(sec).padStart(2, '0')
}


export default function PlayerPage(song_id) {
    let player_page = document.createElement("div")
    player_page.innerHTML = template
    player_page.className = "player_page"

    const audioPlayer = new Audio("https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/01) Frozen Silence - By the Sea.mp3")
    const active_bar = player_page.querySelector(".active-bar")
    const pointer = player_page.querySelector(".pointer")
    audioPlayer.play()
    audioPlayer.addEventListener('timeupdate', () => {
        played.innerText = showSeconds(Math.floor(audioPlayer.currentTime));
        remaining.innerText = "-" + showSeconds(Math.floor(audioPlayer.duration) - Math.floor(audioPlayer.currentTime));
        active_bar.style.width = Math.floor(audioPlayer.currentTime) / Math.floor(audioPlayer.duration) * 100 + "%"
        pointer.style.left = Math.floor(audioPlayer.currentTime) / Math.floor(audioPlayer.duration) * 100 + "%"
    });
    const song = {
        album: 'Liked Songs',
        title: 'Song Title',
        artist: "the artists",
        liked: true,

    }

    player_page.querySelector(".song-cover").setAttribute("src", cover)

    player_page.querySelector(".album-name").innerText = song['album']

    player_page.querySelector(".back-icon").setAttribute('src', arrow)

    player_page.querySelector(".option-icon").setAttribute('src', option)

    player_page.querySelector(".song-name").innerText = song['title']

    player_page.querySelector(".artist").innerText = song['artist']

    player_page.querySelector(".liked_btn").setAttribute('src', like)

    const remaining = player_page.querySelector(".remaining")
    remaining.innerText = "-3:49"

    const played = player_page.querySelector(".played")
    played.innerText = "0:03"

    player_page.querySelector(".next-btn").setAttribute('src', next)

    player_page.querySelector(".previous-btn").setAttribute('src', previous)

    player_page.querySelector(".play-btn").setAttribute('src', whiteCircle)

    player_page.querySelector(".shuffle-btn").setAttribute('src', shuffle)

    player_page.querySelector(".repeat-btn").setAttribute('src', repeat)

    player_page.querySelector(".devices").setAttribute('src', devices)

    player_page.querySelector(".queue").setAttribute('src', queue)

    player_page.querySelector(".play-btn").addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play()
        } else {
            audioPlayer.pause()
        }
    })

    return player_page
}