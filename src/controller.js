import Navigo from 'navigo'; // When using ES modules.
import HomePage from "./pages/home_page/HomePage";
import SearchPage from "./pages/search_page/SearchPage";
import AlbumPage from "./pages/album_page/AlbumPage";
import {Menu} from "./components/menu/Menu";

let currentPage = ""

const pageNames = {
    "searchPage": SearchPage,
    "homePage": HomePage,
    "albumPage": AlbumPage,
}


let body = document.querySelector("body")

export const states = {}
export let searchPage = SearchPage()
export let albumPage = AlbumPage()
export let menu = Menu()
export let homePage = HomePage()

export const router = new Navigo('/');



export function goToPage(to, args={}) {
    if (currentPage !== ""){
        currentPage.remove()
    }
    let new_screen = pageNames[to](args)
    body.append(new_screen)
    currentPage = new_screen
}

export function addToScreen(ele) {
    body.append(ele)
}

export function getURL(){
    return history.state
}
