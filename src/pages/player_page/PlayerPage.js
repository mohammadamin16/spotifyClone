import template from "./template";
import arrow from "../../images/arrow.png"
import option from "../../images/options.png"
import like from "../../images/Like.png"

import next from "../../images/next.png"
import previous from "../../images/previous.png"

import shuffle from "../../images/shuffle-icon.png"
import loading from "url:../../images/Loader.gif"

import play from "../../images/play.png"
import pause from "../../images/pause.png"

import repeat from "../../images/repeat.png"
import devices from "../../images/devices.png"
import queue from "../../images/queue.png"
import {getAlbumByIndex, getCollectionByIndex, getSongByIndex} from "../../api";
import {pageNames, router} from "../../controller";
import axios from "axios";
import {add_song, get_song} from "../../db_handler";

function showSeconds(s) {
    let min = Math.floor(s / 60)
    let sec = s - min * 60
    return min + ":" + String(sec).padStart(2, '0')
}


export function PlayerPage(data) {
    let audioPlayer = new Audio()
    let player_page = document.createElement("div")
    player_page.innerHTML = template
    player_page.className = "player_page"
    let song_api = getSongByIndex(parseInt(data['album_index']), parseInt(data['song_index']))
    let album_api = getAlbumByIndex(parseInt(data['album_index']))

    function fetch_song_file() {
        player_page.querySelector(".play-btn").setAttribute('src', loading)
        const URL = song_api['track_url']

        get_song(song_api['id'], (r) => {
            console.log('hello')
            if (r) {
                console.log('got something')
                console.log(r)
                audioPlayer.setAttribute("src", r['file']);
                player_page.querySelector(".play-btn").setAttribute('src', play)
                audioPlayer.pause()
            } else {
                console.log('lets download')
                axios.get(URL, {responseType: "blob"})
                    .then(function (response) {
                        let reader = new window.FileReader();
                        reader.readAsDataURL(response.data);
                        reader.onload = function () {
                            let audioDataUrl = reader.result;
                            audioPlayer.setAttribute("src", audioDataUrl);
                            audioPlayer.pause()
                            player_page.querySelector(".play-btn").setAttribute('src', play)
                            let new_song = {id: song_api['id'], file: audioDataUrl, title:song_api['track_name']}
                            add_song(new_song)
                        }
                    });

            }
        })

        // axios.get(URL)
        //     .then(function (response) {
        //         console.log('success!');
        //         console.log(response)
        //         audioPlayer = new Audio(response.data)
        //         // audioPlayer.src = URL
        //         // audioPlayer.src =
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }

    audioPlayer.src = song_api['track_url']
    audioPlayer.pause()

    // fetch_song_file()

    const remaining = player_page.querySelector(".remaining")

    const played = player_page.querySelector(".played")

    // const audioPlayer = new Audio(song_api['track_url'])

    audioPlayer.onplaying = () => {
        player_page.querySelector(".play-btn").setAttribute('src', play)
    }


    audioPlayer.onloadedmetadata = () => {
        remaining.innerText = "-" + showSeconds(Math.floor(audioPlayer.duration))
    }
    played.innerText = "0:00"
    audioPlayer.autoplay = false
    // audioPlayer.onloadstart = () => {
    //     player_page.querySelector(".play-btn").setAttribute('src', loading)
    //
    // }
    audioPlayer.onloadeddata = () => {
        player_page.querySelector(".play-btn").setAttribute('src', play)
    }


    player_page.querySelector('.back-icon').onclick = () => {
        router.navigate(`/album/${parseInt(data['album_index'])}`)
    }

    const active_bar = player_page.querySelector(".active-bar")
    const click_taker = player_page.querySelector(".click-taker")
    const pointer = player_page.querySelector(".pointer")

    active_bar.classList.add('animated')
    pointer.classList.add('animated')

    const moveHandler = (e) => {
        let rect = e.target.getBoundingClientRect();
        let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
        let touch = evt.touches[0] || evt.changedTouches[0];
        let x = touch.clientX - rect.left; //x position within the element.
        audioPlayer.currentTime = audioPlayer.duration * x / (rect.right - rect.left)

    }

    player_page.querySelector('.next-btn').onclick = () => {
        let new_song_index = parseInt(data['song_index']) + 1
        if (new_song_index >= getCollectionByIndex(data['album_index'])['musics'].length) {
            new_song_index = 0
        }
        audioPlayer.pause()
        router.navigate(`player/${data['album_index']}/${new_song_index}`)
    }


    player_page.querySelector('.previous-btn').onclick = () => {
        let new_song_index = parseInt(data['song_index']) - 1
        if (new_song_index < 0) {
            new_song_index = getCollectionByIndex(data['album_index'])['musics'].length - 1
        }
        audioPlayer.pause()
        router.navigate(`player/${data['album_index']}/${new_song_index}`)
    }


    click_taker.addEventListener('touchstart', (e) => {
        moveHandler(e)
        window.addEventListener('touchmove', moveHandler)

    })

    click_taker.addEventListener('touchend', (e) => {
        window.removeEventListener('touchmove', moveHandler)
        active_bar.classList.add('animated')
        pointer.classList.add('animated')

    })

    audioPlayer.play().then(r => console.log(r))
    audioPlayer.addEventListener('timeupdate', () => {
        if (document.getElementsByClassName('controls').length === 0) {
            audioPlayer.pause()
        }
        // player_page.querySelector(".play-btn").setAttribute('src', pause)

        played.innerText = showSeconds(Math.floor(audioPlayer.currentTime));
        remaining.innerText = "-" + showSeconds(Math.floor(audioPlayer.duration) - Math.floor(audioPlayer.currentTime));
        active_bar.style.width = Math.floor(audioPlayer.currentTime) / Math.floor(audioPlayer.duration) * 100 + "%"
        pointer.style.left = Math.floor(audioPlayer.currentTime) / Math.floor(audioPlayer.duration) * 100 + "%"
    });


    const load_images = () => {
        player_page.querySelector(".song-cover").setAttribute("src", song_api['track_thumb'])

        player_page.querySelector(".album-name").innerText = album_api['album_name']

        player_page.querySelector(".back-icon").setAttribute('src', arrow)

        player_page.querySelector(".option-icon").setAttribute('src', option)

        player_page.querySelector(".song-name").innerText = song_api['track_name']

        player_page.querySelector(".artist").innerText = album_api['album_composer']

        player_page.querySelector(".liked_btn").setAttribute('src', like)

        player_page.querySelector(".next-btn").setAttribute('src', next)

        player_page.querySelector(".previous-btn").setAttribute('src', previous)

        player_page.querySelector(".shuffle-btn").setAttribute('src', shuffle)

        player_page.querySelector(".repeat-btn").setAttribute('src', repeat)

        player_page.querySelector(".devices").setAttribute('src', devices)

        player_page.querySelector(".queue").setAttribute('src', queue)
    }
    load_images()

    player_page.querySelector(".play-btn").addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play().then((e) => {
                player_page.querySelector(".play-btn").setAttribute('src', pause)
            }).then((e) => {
            })
        } else {
            player_page.querySelector(".play-btn").setAttribute('src', play)

            audioPlayer.pause()
        }
    })

    return player_page
}