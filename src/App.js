import HomePage from "./pages/home_page/HomePage";
import Menu from "./components/menu/Menu";
import SearchPage from "./pages/search_page/SearchPage";


let body = document.querySelector("body")
let homePage = HomePage()
let searchPage = SearchPage()

let menu = Menu()

let currentPage = ""

function changeScreen(to){
    if (currentPage === "home"){
        homePage.remove()
    }else if(currentPage === "search"){
        searchPage.remove()
    }else{

    }

    if (to === "home"){
        body.append(homePage)
    }else if(to === "search"){
        body.append(searchPage)
    }else{

    }

}

function init(){
    currentPage = "home"
    body.append(homePage)
    body.append(menu)
}


init()


