const DB_version = 3

export function db_init() {
    console.log('initializing the songs db')

    const request = indexedDB.open("songsDB", DB_version);
    request.onerror = function (event) {
        console.error("An error occurred with IndexedDB");
        console.error(event);
    }

    request.onupgradeneeded = function () {
        const db = request.result;
        db.onerror = event => {
            console.error(event)
        }
        const songsStore = db.createObjectStore("songs", {keyPath: "id"})
        const favSongStore = db.createObjectStore("fav_songs", {keyPath: "id"})
        songsStore.createIndex("id_index", ["id"], {unique: true})
        favSongStore.createIndex("id_index", ["id"], {unique: true})
    }

}

export function add_song(song) {
    const request = indexedDB.open("songsDB", DB_version);
    request.onerror = (e) => {
        console.error(e)
    }
    request.onsuccess = () => {
        const db = request.result;

        const transaction = db.transaction("songs", "readwrite");

        const store = transaction.objectStore("songs");

        store.put(song);

        transaction.onerror = (e) => {
            console.log(e)
        }
        transaction.onabort = (e) => {
            console.log(e)
        }
        transaction.oncomplete = function () {
            db.close();
        };
    }
}

export function get_song(song_id, on_response) {
    const request = indexedDB.open("songsDB", DB_version);
    request.onsuccess = () => {
        const db = request.result;

        const transaction = db.transaction("songs", "readonly");

        const store = transaction.objectStore("songs");

        const idQuery = store.get(song_id);
        idQuery.onsuccess = function () {
            on_response(idQuery.result)
        }
        idQuery.onerror = () => {
            on_response(null)
        }
        transaction.oncomplete = function () {
            db.close();
        }
    }
}

export function add_fav(song, on_response) {
    const request = indexedDB.open("songsDB", DB_version);
    request.onerror = (e) => {
        console.error(e)
    }
    request.onsuccess = () => {
        const db = request.result;

        const transaction = db.transaction("fav_songs", "readwrite");

        const store = transaction.objectStore("fav_songs");

        store.put(song);

        transaction.onerror = (e) => {
            console.log(e)
        }
        transaction.onabort = (e) => {
            console.log(e)
        }
        transaction.oncomplete = function () {
            on_response(true)
            db.close();
        };
    }
}

export function remove_fav(song_id, on_response) {
    const request = indexedDB.open("songsDB", DB_version);
    request.onerror = (e) => {
        console.error(e)
    }
    request.onsuccess = () => {
        const db = request.result;

        const transaction = db.transaction("fav_songs", "readwrite");

        const store = transaction.objectStore("fav_songs");

        store.delete(song_id);

        transaction.onerror = (e) => {
            console.log(e)
        }
        transaction.onabort = (e) => {
            console.log(e)
        }
        transaction.oncomplete = function () {
            on_response(false)

            db.close();
        };
    }
}


export function get_fav_song(song_id, on_response) {
    const request = indexedDB.open("songsDB", DB_version);
    request.onsuccess = () => {
        const db = request.result;

        const transaction = db.transaction("fav_songs", "readonly");

        const store = transaction.objectStore("fav_songs");

        const idQuery = store.get(song_id);
        idQuery.onsuccess = function () {
            on_response(idQuery.result)
        }
        idQuery.onerror = () => {
            on_response(null)
        }
        transaction.oncomplete = function () {
            db.close();
        }
    }
}


export function get_all_fav_song(on_response) {
    const request = indexedDB.open("songsDB", DB_version);
    request.onsuccess = () => {
        const db = request.result;

        const transaction = db.transaction("fav_songs", "readonly");

        const store = transaction.objectStore("fav_songs");

        const idQuery = store.getAll();
        idQuery.onsuccess = function () {
            on_response(idQuery.result)
        }
        idQuery.onerror = () => {
            on_response(null)
        }
        transaction.oncomplete = function () {
            db.close();
        }
    }
}

// get_all_fav_song((r) => {console.log(r)})
// add_fav({id: 100})
// remove_fav(100)
// get_fav_song(1300, (r) => {console.log(r)})

// get_song(100)
