export function db_init() {
    console.log('initializing the songs db')

    const request = indexedDB.open("songsDB", 1);
    request.onerror = function (event) {
        console.error("An error occurred with IndexedDB");
        console.error(event);
    }

    request.onupgradeneeded = function () {
        const db = request.result;
        db.onerror = event => {
            console.error(event)
        }
        const store = db.createObjectStore("songs", {keyPath: "id"})
        // var objectStore = db.createObjectStore("toDoList", {keyPath: "taskTitle"});
        store.createIndex("file", ["file"], {unique: false})
        store.createIndex("id_index", ["id"], {unique: true})
        console.log('it"s good')

    }

}

export function add_song(song) {
    console.log(song)
    const request = indexedDB.open("songsDB", 1);
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
            console.log('new song was added successfully')
            db.close();
        };
    }
}

export function get_song(song_id, on_response) {

    const request = indexedDB.open("songsDB", 1);
    request.onsuccess = () => {
        const db = request.result;

        const transaction = db.transaction("songs", "readonly");

        const store = transaction.objectStore("songs");

        const idQuery = store.get(song_id);
        idQuery.onsuccess = function () {
            console.log('idQuery', idQuery.result['file']);
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


// add_song({id: 100, file: 'some file'})

// get_song(100)
