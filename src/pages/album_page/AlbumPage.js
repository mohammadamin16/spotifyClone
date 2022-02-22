import template from "./template";
import albumCover from "../../images/albumcover2.png"
import hanszimmer from "../../images/hans-zimmer.jpeg"
import heart_icon from "../../images/heart.png"
import download_icon from "../../images/download-icon.png"
import more_icon from "../../images/more.png"

import play_icon from "../../images/play-icon.png"
import shuffle_icon from "../../images/shuffle-icon.png"
import {Track} from "../../components/track/Track";



export default function AlbumPage(album_id) {
    let album_page = document.createElement("div")
    album_page.innerHTML = template
    album_page.className = "album_page"
    const album_data = {
        title: "Album Title",
        cover_url: albumCover,
        tracks:[
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            },
            {
                title:"Creation Comes Alive",
                owners:"Petit Biscuit, SONIA",
            }
        ],

    }
    album_page.querySelector('.cover').setAttribute('src', album_data['cover_url'])
    album_page.querySelector('.avatar').setAttribute("src",hanszimmer )

    album_page.querySelector('.heart').setAttribute("src",heart_icon )
    album_page.querySelector('.download').setAttribute("src",download_icon )
    album_page.querySelector('.more').setAttribute("src",more_icon )

    album_page.querySelector('.play-icon').setAttribute("src",play_icon )
    album_page.querySelector('.shuffle-icon').setAttribute("src",shuffle_icon )

    let track_container = album_page.querySelector(".track_container")
    album_data.tracks.forEach((t) => {
        let new_track = Track(t)
        track_container.append(new_track)
    })

    return album_page
}