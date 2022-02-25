import {addToScreen, goToPage, menu, router,} from "./controller";




router.on('/album/:id', ({data}) => {
    console.log(data)
    goToPage('albumPage', data['id'])
});

router.on('/home', function () {
    goToPage('homePage')
});

router.on('/search', function () {
    goToPage('searchPage')
});


router.on('/player/:album_index/:song_index', function ({data}) {
    goToPage('playerPage', data)
});

router.resolve();

function init() {
    addToScreen(menu)
}

init()
// db_init()
