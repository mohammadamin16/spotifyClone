import HomePage from "./pages/home_page/HomePage";
import SearchPage from "./pages/search_page/SearchPage";
import AlbumPage from "./pages/album_page/AlbumPage";
import Menu from "./components/menu/Menu";

let currentPage = ""

let body = document.querySelector("body")

export const states = {}
export let searchPage = SearchPage()
export let albumPage = AlbumPage()
export let homePage = HomePage()


export let menu = Menu()


export function goToPage(to) {
    if (currentPage !== ""){
        currentPage.remove()
    }
    body.append(to)
    currentPage = to
}

export function addToScreen(ele) {
    body.append(ele)
}