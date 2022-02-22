import {addToScreen, albumPage, goToPage, homePage, menu, router, searchPage} from "./controller";


router.on('/album/:id', ({data}) => {
    console.log(data); // { id: 'xxx', action: 'save' }
    goToPage('albumPage', data)
});

router.on('/home', function () {
    goToPage('homePage')
});

router.on('/search', function () {
    goToPage('searchPage')
});

router.resolve();

function init() {
    addToScreen(menu)
}

init()


