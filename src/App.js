import {addToScreen, goToPage, router,} from "./controller";
import {db_init} from "./db_handler";
import axios from "axios";


router.on('', ({data}) => {
    window.location.pathname = 'home'
});


router.on('/album/:id', ({data}) => {
    goToPage('albumPage', data['id'], 'home')
});

router.on('/home', ({data}) => {
    goToPage('homePage', data, 'home')
});


router.on('/search', ({data}) => {
    goToPage('searchPage', data, 'search')
});


router.on('/library', ({data}) => {
    goToPage('libraryPage', data, 'library')
});

router.on('/player/:album_index/:song_index', function ({data}) {
    goToPage('playerPage', data)
});


function init() {
    db_init()
    router.resolve();
}


init()
