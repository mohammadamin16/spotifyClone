export function db_init_test() {
    console.log('initializing the song db')

    const request = indexedDB.open("songDB", 7);
    request.onerror = function (event) {
        console.error("An error occurred with IndexedDB");
        console.error(event);
    }

    request.onupgradeneeded = function () {
        const db = request.result;
        const store = db.createObjectStore("songs", {keyPath: "id"})
        store.createIndex("title", ["title"], {unique: false})
        store.createIndex("artist", ["artist"], {unique: false})
    }

    request.onsuccess = function () {
        console.log("Database opened successfully");

        const db = request.result;
        const transaction = db.transaction("songs", "readwrite");

        const store = transaction.objectStore("songs");

        const titleIndex = store.index("title");
        const artistIndex = store.index("artist");

        store.put({id: 1, title: "Red", artist: "Toyota"});
        store.put({id: 2, title: "Red", artist: "Kia"});
        store.put({id: 3, title: "Blue", artist: "Honda"});
        store.put({id: 4, title: "Silver", artist: "Subaru"});

        const idQuery = store.get(4);
        const colourQuery = titleIndex.getAll(["Red"]);
        const colourMakeQuery = artistIndex.get(["Honda"]);

        idQuery.onsuccess = function () {
            console.log('idQuery', idQuery.result);
        };
        colourQuery.onsuccess = function () {
            console.log('colourQuery', colourQuery.result);
        };
        colourMakeQuery.onsuccess = function () {
            console.log('colourMakeQuery', colourMakeQuery.result);
        };

        transaction.oncomplete = function () {
            db.close();
        };
    };


}


export function db_init() {
    console.log('initializing the songs db')

    const request = indexedDB.open("songsDB", 1);
    request.onerror = function (event) {
        console.error("An error occurred with IndexedDB");
        console.error(event);
    }

    request.onupgradeneeded = function () {
        const db = request.result;
        const store = db.createObjectStore("songs", {keyPath: "id"})
        store.createIndex("file", ["file"], {unique: false})
    }




}




