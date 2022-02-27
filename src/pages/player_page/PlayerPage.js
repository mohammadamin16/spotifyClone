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
import {router} from "../../controller";
import axios from "axios";
import {add_song, get_song} from "../../db_handler";

function showSeconds(s) {
    let min = Math.floor(s / 60)
    let sec = s - min * 60
    return min + ":" + String(sec).padStart(2, '0')
}


export function PlayerPage(data) {
    let player_page = document.createElement("div")
    player_page.innerHTML = template
    player_page.className = "player_page"
    const audioPlayer = new Audio()
    const played = player_page.querySelector(".played")
    const remaining = player_page.querySelector(".remaining")
    const active_bar = player_page.querySelector(".active-bar")
    const click_taker = player_page.querySelector(".click-taker")
    const pointer = player_page.querySelector(".pointer")
    const song_api = getSongByIndex(parseInt(data['album_index']), parseInt(data['song_index']))
    const album_api = getAlbumByIndex(parseInt(data['album_index']))

    function fetch_song_file() {
        player_page.querySelector(".play-btn").setAttribute('src', loading)
        const URL = song_api['track_url']
        get_song(song_api['id'], (r) => {
            if (r) {
                console.log('Loading the song from indexedDB')
                audioPlayer.setAttribute("src", r['file']);
                player_page.querySelector(".play-btn").setAttribute('src', play)
                audioPlayer.pause()
            } else {
                console.log('Downloading the song file')
                axios.get(URL, {responseType: "blob"})
                    .then(function (response) {
                        let reader = new window.FileReader();
                        reader.readAsArrayBuffer(response.data);
                        reader.onload = function () {
                            let audioDataUrl = reader.result;
                            audioPlayer.setAttribute("src", audioDataUrl);
                            audioPlayer.pause()
                            player_page.querySelector(".play-btn").setAttribute('src', play)
                            let new_song = {id: song_api['id'], file: audioDataUrl, title: song_api['track_name']}
                            add_song(new_song)
                        }
                    });
            }
        })
    }

    function player_handler() {
        function play_btn_click_listener() {
            if (audioPlayer.paused) {
                audioPlayer.play().then((e) => {
                    player_page.querySelector(".play-btn").setAttribute('src', pause)
                }).then((e) => {
                    console.log(e)
                })
            } else {
                player_page.querySelector(".play-btn").setAttribute('src', play)
                audioPlayer.pause()
            }
        }

        audioPlayer.onplaying = () => {
            player_page.querySelector(".play-btn").setAttribute('src', play)
        }
        audioPlayer.onloadedmetadata = () => {
            remaining.innerText = "-" + showSeconds(Math.floor(audioPlayer.duration))
        }
        audioPlayer.autoplay = false
        audioPlayer.onloadeddata = () => {
            player_page.querySelector(".play-btn").setAttribute('src', play)
        }
        audioPlayer.play().then(r => console.log(r))
        audioPlayer.addEventListener('timeupdate', () => {
            if (document.getElementsByClassName('controls').length === 0) {
                audioPlayer.pause()
            }
            played.innerText = showSeconds(Math.floor(audioPlayer.currentTime));
            remaining.innerText = "-" + showSeconds(Math.floor(audioPlayer.duration) - Math.floor(audioPlayer.currentTime));
            active_bar.style.width = Math.floor(audioPlayer.currentTime) / Math.floor(audioPlayer.duration) * 100 + "%"
            pointer.style.left = Math.floor(audioPlayer.currentTime) / Math.floor(audioPlayer.duration) * 100 + "%"
        });


        player_page.querySelector(".play-btn").addEventListener("click", play_btn_click_listener)

    }


    player_page.querySelector('.back-icon').onclick = () => {
        window.history.back()
    }


    function controls_handler() {
        function next_btn_click_handler() {
            let new_song_index = parseInt(data['song_index']) + 1
            if (new_song_index >= getCollectionByIndex(data['album_index'])['musics'].length) {
                new_song_index = 0
            }
            audioPlayer.pause()
            router.navigate(`player/${data['album_index']}/${new_song_index}`)
        }

        function moveHandler(e) {
            let rect = e.target.getBoundingClientRect();
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            let touch = evt.touches[0] || evt.changedTouches[0];
            let x = touch.clientX - rect.left; //x position within the element.
            audioPlayer.currentTime = audioPlayer.duration * x / (rect.right - rect.left)
        }

        function previous_btn_click_handler() {
            let new_song_index = parseInt(data['song_index']) - 1
            if (new_song_index < 0) {
                new_song_index = getCollectionByIndex(data['album_index'])['musics'].length - 1
            }
            audioPlayer.pause()
            router.navigate(`player/${data['album_index']}/${new_song_index}`)

        }

        played.innerText = "0:00"
        active_bar.classList.add('animated')
        pointer.classList.add('animated')
        click_taker.addEventListener('touchstart', (e) => {
            moveHandler(e)
            window.addEventListener('touchmove', moveHandler)
        })
        click_taker.addEventListener('touchend', (e) => {
            window.removeEventListener('touchmove', moveHandler)
            active_bar.classList.add('animated')
            pointer.classList.add('animated')
        })
        player_page.querySelector('.next-btn').addEventListener('click', next_btn_click_handler)
        player_page.querySelector('.previous-btn').addEventListener('click', previous_btn_click_handler)
    }

    function load_images() {
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
    player_handler()
    fetch_song_file()
    controls_handler()


    return player_page
}