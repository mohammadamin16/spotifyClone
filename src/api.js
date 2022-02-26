
export const getCollectionByIndex = (index) => {
    return data[index]
}

export const getAlbumByIndex = (index) => {
    return data[index]['album']
}


export const getSongByIndex = (album_index, song_index) => {
    return data[album_index]['musics'][song_index]
}

export const getAlbums = () => {
    let result = []

    for (let i=0; i<data.length; i++){
        result.push(data[i]['album'])
    }

    return result
}

const getAllSongs = () => {
    let allSongs = []
    for (const collection of data){
        allSongs.push(collection['musics'])
    }
    return allSongs
}

export const searchInSongs = (query) => {
    let all_songs = getAllSongs()
    let results = []
    for (let i=0; i<all_songs.length; i++){
        for (let j=0; j<all_songs[i].length; j++) {
            if (all_songs[i][j]['track_name'].toLowerCase().includes(query.toLowerCase())) {
                results.push([all_songs[i][j], i, j])
            }
        }
    }
    return results
}
export const data =[
    {
        "album": {
            "id": "114701",
            "album_name": "Emotion",
            "album_composer": "Frozen Silence",
            "album_genre": "Classical Crossover",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/frozen-silence-emotion-2022/"
        },
        "musics": [
            {
                "id": 114760,
                "track_name": "By the Sea",
                "track_time": "1:27",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/01) Frozen Silence - By the Sea.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7819dbac95"
            },
            {
                "id": 114761,
                "track_name": "Dive",
                "track_time": "2:01",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/02) Frozen Silence - Dive.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ee34c33edd"
            },
            {
                "id": 114762,
                "track_name": "Emotion",
                "track_time": "2:34",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/03) Frozen Silence - Emotion.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "793b0f4173"
            },
            {
                "id": 114763,
                "track_name": "Hope and Dreams",
                "track_time": "2:29",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/04) Frozen Silence - Hope and Dreams.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "35cae418d7"
            },
            {
                "id": 114764,
                "track_name": "Renew",
                "track_time": "2:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/05) Frozen Silence - Renew.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "4ecc01c860"
            },
            {
                "id": 114765,
                "track_name": "Song for Lily",
                "track_time": "2:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/06) Frozen Silence - Song for Lily.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c83c96e642"
            },
            {
                "id": 114766,
                "track_name": "The Weather Is Changing",
                "track_time": "2:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/07) Frozen Silence - The Weather Is Changing.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fc78e9feb5"
            },
            {
                "id": 114767,
                "track_name": "Those Innocent Years",
                "track_time": "1:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/08) Frozen Silence - Those Innocent Years.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "16423c041d"
            },
            {
                "id": 114768,
                "track_name": "Those Moments We Shared",
                "track_time": "2:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Frozen Silence - Emotion (2022)/128k/09) Frozen Silence - Those Moments We Shared.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Frozen-Silence-Emotion-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a7f37d3edf"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "114503",
            "album_name": "Destiny ",
            "album_composer": "Whitesand",
            "album_genre": "Modern Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Whitesand-Destiny-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/whitesand-destiny-2022/"
        },
        "musics": [
            {
                "id": 114655,
                "track_name": "Worth Fighting For",
                "track_time": "7:02",
                "track_url": "https://dl.vmusic.ir/2022/02/Whitesand - Destiny (2022)/128k/01) Whitesand - Worth Fighting For.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Whitesand-Destiny-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "cf58e8073a"
            },
            {
                "id": 114656,
                "track_name": "Destiny",
                "track_time": "4:57",
                "track_url": "https://dl.vmusic.ir/2022/02/Whitesand - Destiny (2022)/128k/02) Whitesand - Destiny.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Whitesand-Destiny-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1062f91034"
            },
            {
                "id": 114657,
                "track_name": "Impact",
                "track_time": "5:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Whitesand - Destiny (2022)/128k/03) Whitesand - Impact.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Whitesand-Destiny-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e1283c0fa6"
            },
            {
                "id": 114658,
                "track_name": "Legend of the Sword",
                "track_time": "5:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Whitesand - Destiny (2022)/128k/04) Whitesand - Legend of the Sword.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Whitesand-Destiny-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5f3117fef3"
            },
            {
                "id": 114659,
                "track_name": "Unbreakable",
                "track_time": "6:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Whitesand - Destiny (2022)/128k/05) Whitesand - Unbreakable.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Whitesand-Destiny-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f64c6eaf50"
            },
            {
                "id": 114660,
                "track_name": "Ancient Mastery",
                "track_time": "7:27",
                "track_url": "https://dl.vmusic.ir/2022/02/Whitesand - Destiny (2022)/128k/06) Whitesand - Ancient Mastery.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Whitesand-Destiny-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a472e548bd"
            },
            {
                "id": 114661,
                "track_name": "Adventures of the Past",
                "track_time": "5:48",
                "track_url": "https://dl.vmusic.ir/2022/02/Whitesand - Destiny (2022)/128k/07) Whitesand - Adventures of the Past.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Whitesand-Destiny-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e021ce8780"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "114497",
            "album_name": "Romantic Violin ",
            "album_composer": "Various Artists",
            "album_genre": "Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/various-artists-romantic-violin-2022/"
        },
        "musics": [
            {
                "id": 114593,
                "track_name": "Thaïs  Acte Deux Méditation religieuse",
                "track_time": "5:40",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/01) Various Artists - Thaïs  Acte Deux Méditation religieuse.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f69f5ecf16"
            },
            {
                "id": 114594,
                "track_name": "The Gadfly, Op. 97 3. Youth (Romance",
                "track_time": "3:49",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/02) Various Artists - The Gadfly, Op. 97 3. Youth (Romance).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "992ded01a0"
            },
            {
                "id": 114595,
                "track_name": "Concerto for Violin and Strings in F minor, Op.8, No.4, R.297 L'inverno 2. Largo",
                "track_time": "1:58",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/03) Various Artists - Concerto for Violin and Strings in F minor, Op.8, No.4, R.297 L'inverno 2. Largo.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2f3939d104"
            },
            {
                "id": 114596,
                "track_name": "Cavalleria rusticana Intermezzo (Arr. Holt",
                "track_time": "3:05",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/04) Various Artists - Cavalleria rusticana Intermezzo (Arr. Holt).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ed2190ccd8"
            },
            {
                "id": 114597,
                "track_name": "Salut d'amour, Op. 12",
                "track_time": "2:59",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/05) Various Artists - Salut d'amour, Op. 12.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f191cb6bd9"
            },
            {
                "id": 114598,
                "track_name": "La Capricieuse, Op. 17",
                "track_time": "4:26",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/06) Various Artists - La Capricieuse, Op. 17.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "4f3d8591b0"
            },
            {
                "id": 114599,
                "track_name": "Beau Soir, L. 6",
                "track_time": "2:15",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/07) Various Artists - Beau Soir, L. 6.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e78356734f"
            },
            {
                "id": 114600,
                "track_name": "Suite bergamasque, L. 75 Clair de lune (Arr. A. Roelens for Violin and Piano",
                "track_time": "4:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/08) Various Artists - Suite bergamasque, L. 75 Clair de lune (Arr. A. Roelens for Violin and Piano).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "649ac401be"
            },
            {
                "id": 114601,
                "track_name": "Violin Romance No.2 in F, Op.50",
                "track_time": "7:52",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/09) Various Artists - Violin Romance No.2 in F, Op.50.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c9db60add8"
            },
            {
                "id": 114602,
                "track_name": "Serenade (Standchen No. 4 from Schwanengesang D. 957",
                "track_time": "4:14",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/10) Various Artists - Serenade (Standchen No. 4 from Schwanengesang D. 957).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "dc34202527"
            },
            {
                "id": 114603,
                "track_name": "Adagio in E Major, K. 261",
                "track_time": "6:47",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/11) Various Artists - Adagio in E Major, K. 261.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5ce337ae9b"
            },
            {
                "id": 114604,
                "track_name": "Concerto for 2 Violins, Strings, and Continuo in D minor, BWV 1043 2. Largo ma non tanto",
                "track_time": "6:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/12) Various Artists - Concerto for 2 Violins, Strings, and Continuo in D minor, BWV 1043 2. Largo ma non tanto.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c4dce45a1c"
            },
            {
                "id": 114605,
                "track_name": "Violin Concerto No.1 in G minor, Op.26 2. Adagio",
                "track_time": "9:29",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/13) Various Artists - Violin Concerto No.1 in G minor, Op.26 2. Adagio.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "60118ac151"
            },
            {
                "id": 114606,
                "track_name": "Apres Une Reve",
                "track_time": "2:48",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/14) Various Artists - Apres Une Reve.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5d83054132"
            },
            {
                "id": 114607,
                "track_name": "Vocalise, Op.34, No.14",
                "track_time": "5:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/15) Various Artists - Vocalise, Op.34, No.14.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f5a2e1b8ce"
            },
            {
                "id": 114608,
                "track_name": "Liebesleid",
                "track_time": "3:30",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/16) Various Artists - Liebesleid.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d7022a8d05"
            },
            {
                "id": 114609,
                "track_name": "Liebesfreud",
                "track_time": "3:15",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/17) Various Artists - Liebesfreud.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "932a23233d"
            },
            {
                "id": 114610,
                "track_name": "Sérénade mélancolique in B Flat Minor, Op. 26, TH.56",
                "track_time": "9:28",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/18) Various Artists - Sérénade mélancolique in B Flat Minor, Op. 26, TH.56.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d2d46f96a5"
            },
            {
                "id": 114611,
                "track_name": "Valse Sentimentale, Op.51 No.6",
                "track_time": "2:02",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/19) Various Artists - Valse Sentimentale, Op.51 No.6.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ed6aff7355"
            },
            {
                "id": 114612,
                "track_name": "Ae Fond Kiss",
                "track_time": "4:40",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/20) Various Artists - Ae Fond Kiss.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c7f7708fdb"
            },
            {
                "id": 114613,
                "track_name": "My Love Is Like A Red Red Rose",
                "track_time": "3:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/21) Various Artists - My Love Is Like A Red Red Rose.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "208d07ffd7"
            },
            {
                "id": 114614,
                "track_name": "Nocturne No.20 in C sharp minor, Op.posth.",
                "track_time": "3:49",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/22) Various Artists - Nocturne No.20 in C sharp minor, Op.posth..mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6cd71e2674"
            },
            {
                "id": 114615,
                "track_name": "Nocturne",
                "track_time": "3:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/23) Various Artists - Nocturne.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "bf0e836765"
            },
            {
                "id": 114616,
                "track_name": "Violin Concerto No. 3 in B Minor, Op. 61 2. Andantino quasi allegretto",
                "track_time": "8:17",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/24) Various Artists - Violin Concerto No. 3 in B Minor, Op. 61 2. Andantino quasi allegretto.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1778fb4e28"
            },
            {
                "id": 114617,
                "track_name": "Concerto for Violin, Oboe, and Strings in D minor, BWV 1060 2. Adagio",
                "track_time": "5:32",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/25) Various Artists - Concerto for Violin, Oboe, and Strings in D minor, BWV 1060 2. Adagio.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5ccd6faefd"
            },
            {
                "id": 114618,
                "track_name": "My Edward & I (from Jayne Eyre",
                "track_time": "4:59",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/26) Various Artists - My Edward & I (from Jayne Eyre).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a9ffaf39cd"
            },
            {
                "id": 114619,
                "track_name": "The Gentle Light That Wakes Me",
                "track_time": "6:05",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/27) Various Artists - The Gentle Light That Wakes Me.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "00b357afb1"
            },
            {
                "id": 114620,
                "track_name": "Concerto for Violin & Orchestra, Op. 14 2. Andante",
                "track_time": "8:49",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/28) Various Artists - Concerto for Violin & Orchestra, Op. 14 2. Andante.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9a750457e5"
            },
            {
                "id": 114621,
                "track_name": "Violin Concerto In D Major, Op. 35 2. Romance Andante",
                "track_time": "8:25",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/29) Various Artists - Violin Concerto In D Major, Op. 35 2. Romance Andante.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ad1e7e6c16"
            },
            {
                "id": 114622,
                "track_name": "Die tote Stadt  Act 1 Mariettas Lied",
                "track_time": "5:30",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/30) Various Artists - Die tote Stadt  Act 1 Mariettas Lied.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e66b842ca4"
            },
            {
                "id": 114623,
                "track_name": "Schön Rosmarin",
                "track_time": "2:02",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/31) Various Artists - Schön Rosmarin.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "17cc1213d1"
            },
            {
                "id": 114624,
                "track_name": "Chanson de nuit, Op. 15, No. 1",
                "track_time": "3:42",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/32) Various Artists - Chanson de nuit, Op. 15, No. 1.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "396d5326de"
            },
            {
                "id": 114625,
                "track_name": "Sospiri, Op. 70 (Arr. Violin and Piano",
                "track_time": "4:10",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/33) Various Artists - Sospiri, Op. 70 (Arr. Violin and Piano).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6da774f726"
            },
            {
                "id": 114626,
                "track_name": "Violin Concerto No. 1 in A minor, BWV 1041 2. Andante",
                "track_time": "6:23",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/34) Various Artists - Violin Concerto No. 1 in A minor, BWV 1041 2. Andante.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "dd92826120"
            },
            {
                "id": 114627,
                "track_name": "Violin Concerto In D, Op. 35, TH. 59 2. Canzonetta (Andante",
                "track_time": "6:25",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/35) Various Artists - Violin Concerto In D, Op. 35, TH. 59 2. Canzonetta (Andante).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3a7fc928c1"
            },
            {
                "id": 114628,
                "track_name": "Romance, Op.78, No.2",
                "track_time": "3:09",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/36) Various Artists - Romance, Op.78, No.2.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d3d55e4d40"
            },
            {
                "id": 114629,
                "track_name": "Waldszenen, Op. 82",
                "track_time": "3:30",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/37) Various Artists - Waldszenen, Op. 82 - Arr. Leopold Auer The Prophet Bird.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "73a0ee3ed9"
            },
            {
                "id": 114630,
                "track_name": "Zigeunerweisen, Op. 20",
                "track_time": "9:01",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/38) Various Artists - Zigeunerweisen, Op. 20.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "97d3565e34"
            },
            {
                "id": 114631,
                "track_name": "Carmen Fantasy, Op. 25",
                "track_time": "11:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Various Artists - Romantic Violin (2022)/128k/39) Various Artists - Carmen Fantasy, Op. 25.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Various-Artists-Romantic-Violin-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "dcda12b123"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "114482",
            "album_name": "Lost Piano ",
            "album_composer": "E-Soundtrax",
            "album_genre": "Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/e-soundtrax-lost-piano-2022/"
        },
        "musics": [
            {
                "id": 114530,
                "track_name": "Life (Piano Version",
                "track_time": "3:33",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/01) e-soundtrax - Life (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "42337287b1"
            },
            {
                "id": 114531,
                "track_name": "Beauty Inspiration (Piano Version",
                "track_time": "3:32",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/02) e-soundtrax - Beauty Inspiration (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8bbc017831"
            },
            {
                "id": 114532,
                "track_name": "Forgotten Piano Dreams",
                "track_time": "2:51",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/03) e-soundtrax - Forgotten Piano Dreams.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3aae0273aa"
            },
            {
                "id": 114533,
                "track_name": "Lullaby",
                "track_time": "1:50",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/04) e-soundtrax - Lullaby.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c0f7d2fa20"
            },
            {
                "id": 114534,
                "track_name": "Ethereal (Piano Version",
                "track_time": "2:33",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/05) e-soundtrax - Ethereal (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b4ef00d497"
            },
            {
                "id": 114535,
                "track_name": "Autumn (Piano Version",
                "track_time": "2:29",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/06) e-soundtrax - Autumn (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e8bb04081c"
            },
            {
                "id": 114536,
                "track_name": "Sad Waltz",
                "track_time": "1:56",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/07) e-soundtrax - Sad Waltz.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "73bfadbf52"
            },
            {
                "id": 114537,
                "track_name": "Steps",
                "track_time": "2:50",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/08) e-soundtrax - Steps.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a54e5ed87c"
            },
            {
                "id": 114538,
                "track_name": "Moments (Piano Version",
                "track_time": "3:13",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/09) e-soundtrax - Moments (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "4206c6fa75"
            },
            {
                "id": 114539,
                "track_name": "Paris (Piano Version",
                "track_time": "2:03",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/10) e-soundtrax - Paris (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e7eb6f48fb"
            },
            {
                "id": 114540,
                "track_name": "Mirror",
                "track_time": "2:15",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/11) e-soundtrax - Mirror.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7911e858b4"
            },
            {
                "id": 114541,
                "track_name": "Promenade (Piano Version",
                "track_time": "2:58",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/12) e-soundtrax - Promenade (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "79f2e98a75"
            },
            {
                "id": 114542,
                "track_name": "Home",
                "track_time": "3:23",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/13) e-soundtrax - Home.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "15d917c4ce"
            },
            {
                "id": 114543,
                "track_name": "Sunrise",
                "track_time": "3:31",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/14) e-soundtrax - Sunrise.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8eb95d958d"
            },
            {
                "id": 114544,
                "track_name": "Dream",
                "track_time": "2:14",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/15) e-soundtrax - Dream.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "96b6d5090b"
            },
            {
                "id": 114545,
                "track_name": "Family (Piano Version",
                "track_time": "2:39",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/16) e-soundtrax - Family (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "24b8d92f47"
            },
            {
                "id": 114546,
                "track_name": "Sunset (Piano Version",
                "track_time": "3:30",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/17) e-soundtrax - Sunset (Piano Version).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "675fc6462f"
            },
            {
                "id": 114547,
                "track_name": "Dusk",
                "track_time": "1:56",
                "track_url": "https://dl.vmusic.ir/2022/02/e soundtrax - Lost Piano (2022)/128k/18) e-soundtrax - Dusk.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/e-soundtrax-Lost-Piano-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": false,
                "nonce": "be95201beb"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "114242",
            "album_name": "Serenata española",
            "album_composer": "Brad DeRoche",
            "album_genre": "Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/brad-deroche-serenata-espanola-2022/"
        },
        "musics": [
            {
                "id": 114301,
                "track_name": "Impresiones de España II. Serenata española (Arr. for Guitar",
                "track_time": "3:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/01) Brad DeRoche - Impresiones de España II. Serenata española (Arr. for Guitar).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "603caece5a"
            },
            {
                "id": 114302,
                "track_name": "Pavana",
                "track_time": "1:45",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/02) Brad DeRoche - Pavana.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ecc1ca88e6"
            },
            {
                "id": 114303,
                "track_name": "El columpio",
                "track_time": "2:50",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/03) Brad DeRoche - El columpio.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fcfb634274"
            },
            {
                "id": 114304,
                "track_name": "Danza mora",
                "track_time": "3:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/04) Brad DeRoche - Danza mora.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "833e0073df"
            },
            {
                "id": 114305,
                "track_name": "Recuerdos de la Alhambra",
                "track_time": "5:20",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/05) Brad DeRoche - Recuerdos de la Alhambra.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5a2d2a612b"
            },
            {
                "id": 114306,
                "track_name": "Capricho árabe",
                "track_time": "5:20",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/06) Brad DeRoche - Capricho árabe.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1dd12bc5b1"
            },
            {
                "id": 114307,
                "track_name": "Bolero in A Minor",
                "track_time": "2:04",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/07) Brad DeRoche - Bolero in A Minor.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ac61c1b1f6"
            },
            {
                "id": 114308,
                "track_name": "La mariposa, Op. 1",
                "track_time": "3:44",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/08) Brad DeRoche - La mariposa, Op. 1.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "308fbf5f39"
            },
            {
                "id": 114309,
                "track_name": "12 Danzas españolas No. 5, Andaluza (Arr. for Guitar",
                "track_time": "4:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/09) Brad DeRoche - 12 Danzas españolas No. 5, Andaluza (Arr. for Guitar).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0fefadbb5b"
            },
            {
                "id": 114310,
                "track_name": "12 Tonadillas en estilo antiguo, H. 136 No. 8, La maja de Goya (Arr. for Guitar",
                "track_time": "5:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/10) Brad DeRoche - 12 Tonadillas en estilo antiguo, H. 136 No. 8, La maja de Goya (Arr. for Guitar).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6342cb1b8d"
            },
            {
                "id": 114311,
                "track_name": "Cuentos de la juventud, Op. 1 No. 1, Dedicatoria (Arr. for Guitar",
                "track_time": "2:01",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/11) Brad DeRoche - Cuentos de la juventud, Op. 1 No. 1, Dedicatoria (Arr. for Guitar).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0c34866cdc"
            },
            {
                "id": 114312,
                "track_name": "El sombrero de tres picos, Suite No. 2 No. 2, Danza del molinero (Arr. for Guitar",
                "track_time": "2:46",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/12) Brad DeRoche - El sombrero de tres picos, Suite No. 2 No. 2, Danza del molinero (Arr. for Guitar).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e8a46005aa"
            },
            {
                "id": 114313,
                "track_name": "El amor brujo No. 6, Romance del pescador (Arr. for Guitar",
                "track_time": "2:38",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/13) Brad DeRoche - El amor brujo No. 6, Romance del pescador (Arr. for Guitar).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "cb98050fe6"
            },
            {
                "id": 114314,
                "track_name": "Suite española No. 1, Op. 47 V. Asturias (Arr. for Guitar",
                "track_time": "6:36",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/14) Brad DeRoche - Suite española No. 1, Op. 47 V. Asturias (Arr. for Guitar).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d2576f368b"
            },
            {
                "id": 114315,
                "track_name": "Suite española No. 2, Op. 97, B. 32 IV. Zambra granadina (Arr. for Guitar",
                "track_time": "4:35",
                "track_url": "https://dl.vmusic.ir/2022/02/Brad DeRoche - Serenata española (2022)/128k/15) Brad DeRoche - Suite española No. 2, Op. 97, B. 32 IV. Zambra granadina (Arr. for Guitar).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Brad-DeRoche-Serenata-espanola-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "dc0c53889d"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "114062",
            "album_name": "Peaceful Piano Vol 14",
            "album_composer": "Vmusic PlayList",
            "album_genre": "Classical Crossover, Instrumental, New Age",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
            "album_url": "https://vmusic.ir/playlist/peaceful-piano-vol-14/"
        },
        "musics": [
            {
                "id": 114074,
                "track_name": "Kardelen",
                "track_time": "2:48",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/01) Josh Kramer - Kardelen.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9315d0a55a"
            },
            {
                "id": 114075,
                "track_name": "Guiding Light",
                "track_time": "3:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/02) Alexis Ffrench - Guiding Light.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "47fca1dd5d"
            },
            {
                "id": 114076,
                "track_name": "Reflections",
                "track_time": "2:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/03) Sølys - Reflections.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "4864efae39"
            },
            {
                "id": 114077,
                "track_name": "Ballade",
                "track_time": "3:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/04) Delange - Ballade.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2139218c2a"
            },
            {
                "id": 114078,
                "track_name": "Falling For",
                "track_time": "2:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/05) Francesco Le Metre - Falling For.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "cd445c869c"
            },
            {
                "id": 114079,
                "track_name": "Snowing",
                "track_time": "4:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/06) Jacob's Piano, Adrian Zaharia - Snowing.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "313c7b8570"
            },
            {
                "id": 114080,
                "track_name": "I Should Have Known",
                "track_time": "2:07",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/07) Amalgamare - I Should Have Known.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1e224bd0c6"
            },
            {
                "id": 114081,
                "track_name": "En Su Santuario",
                "track_time": "2:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/08) Lobató - En Su Santuario.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ca5fd75f93"
            },
            {
                "id": 114082,
                "track_name": "Love Is All",
                "track_time": "2:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/09) Wilson Trouvé - Love Is All.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f12fef8232"
            },
            {
                "id": 114083,
                "track_name": "Remember When",
                "track_time": "2:37",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/10) Helen Green, Stephen Weber - Remember When.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2445f17182"
            },
            {
                "id": 114084,
                "track_name": "Et Maintenant",
                "track_time": "1:59",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/100) Jef Martens - Et Maintenant.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e2c0adf65e"
            },
            {
                "id": 114085,
                "track_name": "Ave",
                "track_time": "2:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/101) Kristoffer Wallin - Ave.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "11bbc9bedf"
            },
            {
                "id": 114086,
                "track_name": "The Right Way",
                "track_time": "6:50",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/102) Luca Morelli - The Right Way.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "76ec4ad33f"
            },
            {
                "id": 114087,
                "track_name": "Cancelled",
                "track_time": "2:53",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/103) Martin Czerny - Cancelled.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "bec1ea9010"
            },
            {
                "id": 114088,
                "track_name": "Colours In The Clouds",
                "track_time": "2:10",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/104) Mettaform - Colours In The Clouds.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1b5e01a333"
            },
            {
                "id": 114089,
                "track_name": "Abcdefu (Arr. Piano",
                "track_time": "2:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/105) Music Lab Collective - Abcdefu (Arr. Piano).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2b5af9f0d6"
            },
            {
                "id": 114090,
                "track_name": "Cloud 7",
                "track_time": "2:30",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/106) Peter Ries - Cloud 7.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "24f4ceb7e2"
            },
            {
                "id": 114091,
                "track_name": "Delicated",
                "track_time": "3:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/107) Rich Batsford - Delicated.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "bfced4574c"
            },
            {
                "id": 114092,
                "track_name": "Hymne",
                "track_time": "2:46",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/108) Ron Adelaar - Hymne.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "60a0a46a79"
            },
            {
                "id": 114093,
                "track_name": "The Bird And The Snow",
                "track_time": "4:38",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/109) Adrien De La Salle, Adrian Zaharia - The Bird And The Snow.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a38847a8f6"
            },
            {
                "id": 114094,
                "track_name": "Ifthen",
                "track_time": "2:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/11) Stefan Truyman - Ifthen.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "36a94eaa5b"
            },
            {
                "id": 114095,
                "track_name": "Alba",
                "track_time": "2:26",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/110) Patrick Hamilton - Alba.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f61d7ef6f1"
            },
            {
                "id": 114096,
                "track_name": "Tsiengele",
                "track_time": "2:52",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/111) Ruben Fjellner - Tsiengele.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a72966e77c"
            },
            {
                "id": 114097,
                "track_name": "La Boîte À Musique",
                "track_time": "3:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/112) Tom Kristiaan - La Boîte À Musique.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "40fe6ccfa4"
            },
            {
                "id": 114098,
                "track_name": "Murmuration",
                "track_time": "1:23",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/113) Christof R Davis - Murmuration.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d47b614533"
            },
            {
                "id": 114099,
                "track_name": "Crystalized",
                "track_time": "2:24",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/114) White Lava - Crystalized.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3d33544116"
            },
            {
                "id": 114100,
                "track_name": "Autumn Leaves",
                "track_time": "2:24",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/12) Scholler - Autumn Leaves.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fcea2c5e0e"
            },
            {
                "id": 114101,
                "track_name": "Bliss",
                "track_time": "1:52",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/13) Ron Adelaar - Bliss.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9481686143"
            },
            {
                "id": 114102,
                "track_name": "Fingers Crossed (Arr. Piano",
                "track_time": "3:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/14) Music Lab Collective - Fingers Crossed (Arr. Piano).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "460824cbc1"
            },
            {
                "id": 114103,
                "track_name": "A Faint Qualm For The Future",
                "track_time": "2:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/15) Luke Howard - A Faint Qualm For The Future.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9558ae1734"
            },
            {
                "id": 114104,
                "track_name": "Mirrored",
                "track_time": "2:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/16) Library Tapes, Phryne L - Mirrored.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6dda1d801f"
            },
            {
                "id": 114105,
                "track_name": "Force Et Douceur",
                "track_time": "3:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/17) Jordane Tumarinson - Force Et Douceur.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "42df9db2a7"
            },
            {
                "id": 114106,
                "track_name": "Nocturnal",
                "track_time": "5:13",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/18) Joep Beving - Nocturnal.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fd860afce0"
            },
            {
                "id": 114107,
                "track_name": "Eternal Light",
                "track_time": "2:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/19) Javi Lobe - Eternal Light.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6aa4f6462a"
            },
            {
                "id": 114108,
                "track_name": "Mirror",
                "track_time": "3:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/20) Hideyuki Hashimoto - Mirror.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2a0d88c5e7"
            },
            {
                "id": 114109,
                "track_name": "The Old Windmill",
                "track_time": "2:02",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/21) Henri Bentley - The Old Windmill.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ce982e1da1"
            },
            {
                "id": 114110,
                "track_name": "Wonderland",
                "track_time": "4:28",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/22) Greg Maroney - Wonderland.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "850489ecde"
            },
            {
                "id": 114111,
                "track_name": "Solace Waltz",
                "track_time": "2:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/23) Goldbæk - Solace Waltz.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "64b2e1acd6"
            },
            {
                "id": 114112,
                "track_name": "Arriving Settler",
                "track_time": "2:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/24) Glenn Natale - Arriving Settler.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7959adf538"
            },
            {
                "id": 114113,
                "track_name": "Counting The Days You’re Gone",
                "track_time": "3:24",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/25) Franz Gordon - Counting The Days You’re Gone.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1383433d30"
            },
            {
                "id": 114114,
                "track_name": "To Be Loved",
                "track_time": "2:32",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/26) Day Blue - To Be Loved.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6baeb2d431"
            },
            {
                "id": 114115,
                "track_name": "Take Your Time",
                "track_time": "2:24",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/27) Dario Crisman - Take Your Time.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7fe6387a19"
            },
            {
                "id": 114116,
                "track_name": "Tristura",
                "track_time": "2:44",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/28) Carlos Hof - Tristura.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ebe67341af"
            },
            {
                "id": 114117,
                "track_name": "Dreamtales",
                "track_time": "2:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/29) Blurstem - Dreamtales.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c999350256"
            },
            {
                "id": 114118,
                "track_name": "Rewind",
                "track_time": "3:07",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/30) Ben Laver - Rewind.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d2619ea4b0"
            },
            {
                "id": 114119,
                "track_name": "Intimacy",
                "track_time": "2:05",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/31) Angel Ruediger - Intimacy.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8e2b5472ee"
            },
            {
                "id": 114120,
                "track_name": "Turned Into A Bird Then Flew Away",
                "track_time": "3:09",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/32) Mustafa Avşaroğlu - Turned Into A Bird Then Flew Away.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5143b6aaad"
            },
            {
                "id": 114121,
                "track_name": "Je Vais Vous Attendre",
                "track_time": "2:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/33) Lo Mimieux - Je Vais Vous Attendre.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "566705fa9f"
            },
            {
                "id": 114122,
                "track_name": "You, Me, Everything",
                "track_time": "2:10",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/34) Charles Bolt - You, Me, Everything.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b9113326b8"
            },
            {
                "id": 114123,
                "track_name": "Ae Fond Kiss",
                "track_time": "3:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/35) Patrick Doyle - Ae Fond Kiss.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3524d3d065"
            },
            {
                "id": 114124,
                "track_name": "In Peace",
                "track_time": "1:55",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/36) Pieter Savenberg - In Peace.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5c9423bdd1"
            },
            {
                "id": 114125,
                "track_name": "Phlox",
                "track_time": "2:53",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/37) Sebastian Zawadzki - Phlox.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fe02bb8c93"
            },
            {
                "id": 114126,
                "track_name": "Way Back Home",
                "track_time": "2:38",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/38) Tim Linghaus - Way Back Home - Solo Piano.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f0c84d6b8a"
            },
            {
                "id": 114127,
                "track_name": "From A Late Night Train",
                "track_time": "2:55",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/39) Thomas Kessler - From A Late Night Train.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f9087dc12b"
            },
            {
                "id": 114128,
                "track_name": "Oceans",
                "track_time": "2:34",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/40) Thejrsounddesign - Oceans.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fbb51a78a8"
            },
            {
                "id": 114129,
                "track_name": "Quietness",
                "track_time": "2:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/41) Stefano Costa - Quietness.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ab6ab939f8"
            },
            {
                "id": 114130,
                "track_name": "Elegy (Piano & Cello",
                "track_time": "4:42",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/42) Shoshana Michel, Roxane Genot - Elegy (Piano & Cello).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3ab1d2247e"
            },
            {
                "id": 114131,
                "track_name": "Sand",
                "track_time": "1:29",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/43) Raffaele Grimaldi - Sand.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "efa29bddfa"
            },
            {
                "id": 114132,
                "track_name": "Gone",
                "track_time": "1:55",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/44) Piotr Wiese - Gone.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ab94d3f592"
            },
            {
                "id": 114133,
                "track_name": "I Will Always Love You",
                "track_time": "2:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/45) Piamino - I Will Always Love You.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "bf76871f89"
            },
            {
                "id": 114134,
                "track_name": "Always",
                "track_time": "4:04",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/46) Philip Daniel - Always.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d3aca23e57"
            },
            {
                "id": 114135,
                "track_name": "Wandering Off To Sleep",
                "track_time": "2:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/47) Phil Larson - Wandering Off To Sleep.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "156b9d4aa1"
            },
            {
                "id": 114136,
                "track_name": "I Could Have Been A Feather",
                "track_time": "3:47",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/48) Olec Mün - I Could Have Been A Feather.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1835db3b89"
            },
            {
                "id": 114137,
                "track_name": "Glow",
                "track_time": "2:01",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/49) Morninglightmusic - Glow.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0a0799de26"
            },
            {
                "id": 114138,
                "track_name": "Daydreaming",
                "track_time": "2:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/50) Michael Frankenberger - Daydreaming.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b7fafeaedd"
            },
            {
                "id": 114139,
                "track_name": "Shadows Grow Longer",
                "track_time": "2:15",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/51) Matti Bye - Shadows Grow Longer.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fafe433317"
            },
            {
                "id": 114140,
                "track_name": "Shadows Grow Longer",
                "track_time": "3:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/52) Matti Bye - Shadows Grow Longer - Extended.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "29121ccbe6"
            },
            {
                "id": 114141,
                "track_name": "Far Away",
                "track_time": "2:37",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/53) Matthew Avery - Far Away.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "36002f8e7e"
            },
            {
                "id": 114142,
                "track_name": "Bitterness",
                "track_time": "2:25",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/54) Martin Czerny - Bitterness.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "359484c03f"
            },
            {
                "id": 114143,
                "track_name": "Longing",
                "track_time": "1:44",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/55) Martin Bloch - Longing.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "220e7e38fd"
            },
            {
                "id": 114144,
                "track_name": "Popcorn",
                "track_time": "3:26",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/56) Louis Landon - Popcorn.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9cc57d8c1c"
            },
            {
                "id": 114145,
                "track_name": "Fragments",
                "track_time": "2:59",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/57) Josh Kramer - Fragments.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0afdf1e621"
            },
            {
                "id": 114146,
                "track_name": "Erased Words",
                "track_time": "2:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/58) Jordi Forniés - Erased Words.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b33b8552cf"
            },
            {
                "id": 114147,
                "track_name": "Freedom Waltz",
                "track_time": "1:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/59) Jesse Brown - Freedom Waltz.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "98aaf51976"
            },
            {
                "id": 114148,
                "track_name": "Polaris",
                "track_time": "1:47",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/60) Jacopo Croci - Polaris.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c16d18dd69"
            },
            {
                "id": 114149,
                "track_name": "Calm After The Storm",
                "track_time": "6:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/61) Jacco Wynia - Calm After The Storm.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3baff8e8b5"
            },
            {
                "id": 114150,
                "track_name": "Hemera",
                "track_time": "2:35",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/62) Giuliano Poles - Hemera.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7399f4cd70"
            },
            {
                "id": 114151,
                "track_name": "Paper Swans",
                "track_time": "2:27",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/63) Eamonn Watt - Paper Swans.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "984071cf2c"
            },
            {
                "id": 114152,
                "track_name": "Late",
                "track_time": "3:29",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/64) Dyathon - Late.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b62afc2283"
            },
            {
                "id": 114153,
                "track_name": "Thru Landscapes (Arrival",
                "track_time": "4:32",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/65) Dirk Maassen - Thru Landscapes (Arrival).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "730449d891"
            },
            {
                "id": 114154,
                "track_name": "Love Letter",
                "track_time": "3:34",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/66) David Tolk - Love Letter.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "25cec9bb7b"
            },
            {
                "id": 114155,
                "track_name": "Infinite",
                "track_time": "4:36",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/67) Cinthya Garcia - Infinite.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5c13a2a183"
            },
            {
                "id": 114156,
                "track_name": "Makes Me Wonder",
                "track_time": "2:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/68) Christopher Dicker - Makes Me Wonder.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d9ee91ddfc"
            },
            {
                "id": 114157,
                "track_name": "Affettuoso (Händel Redesigned",
                "track_time": "3:38",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/69) Carlos Cipa - Affettuoso (Händel Redesigned).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "962d2fb736"
            },
            {
                "id": 114158,
                "track_name": "Circumstances",
                "track_time": "2:20",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/70) Cameron Segal - Circumstances.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c3c71cf6e2"
            },
            {
                "id": 114159,
                "track_name": "Not Always",
                "track_time": "3:12",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/71) Bart Sunshine - Not Always.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0e7acb85ef"
            },
            {
                "id": 114160,
                "track_name": "Awakening",
                "track_time": "2:42",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/72) Aron Van Selm, Ardie Son - Awakening.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e7f43f5f3a"
            },
            {
                "id": 114161,
                "track_name": "The Fairies Live Here",
                "track_time": "3:17",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/73) Alexander Motovilov - The Fairies Live Here.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3971914a18"
            },
            {
                "id": 114162,
                "track_name": "Don't Wake Me Up Before You Go-Go",
                "track_time": "2:36",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/74) Adrian Kuipers - Don't Wake Me Up Before You Go-Go.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "4fd25e0001"
            },
            {
                "id": 114163,
                "track_name": "Waltz For Selma",
                "track_time": "1:50",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/75) Dennis Korn - Waltz For Selma.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "22e6679155"
            },
            {
                "id": 114164,
                "track_name": "Immortal Beloved",
                "track_time": "3:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/76) James Heather - Immortal Beloved.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "cd9795059f"
            },
            {
                "id": 114165,
                "track_name": "Lambent",
                "track_time": "3:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/77) Ạoris - Lambent.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "71fd04e1fc"
            },
            {
                "id": 114166,
                "track_name": "‘una Mattina’ From The Film ‘intouchables'",
                "track_time": "2:59",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/78) Alessandro Simonetto - ‘una Mattina’ From The Film ‘intouchables'.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8ecbe9c60d"
            },
            {
                "id": 114167,
                "track_name": "Ii. Floating Leaf",
                "track_time": "2:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/79) Konstantia Gourzi, William Youn - Ii. Floating Leaf.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "22f89b51bd"
            },
            {
                "id": 114168,
                "track_name": "Suspended",
                "track_time": "4:10",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/80) Luca Mazzillo, Cabell Rhode - Suspended.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5d61cabf08"
            },
            {
                "id": 114169,
                "track_name": "See Daylight",
                "track_time": "2:09",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/81) Anna Sofia Nord - See Daylight.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ca2be12d59"
            },
            {
                "id": 114170,
                "track_name": "Howl's Moving Castle Theme Merry-Go-Round Of Life",
                "track_time": "2:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/82) Frozen Silence - Howl's Moving Castle Theme Merry-Go-Round Of Life - Piano.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c8ec77520b"
            },
            {
                "id": 114171,
                "track_name": "Journey's End",
                "track_time": "3:09",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/83) Matthew Shell, Vahagn Stepanyan - Journey's End.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e5f479bdad"
            },
            {
                "id": 114172,
                "track_name": "Doux",
                "track_time": "2:46",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/84) August Benedict - Doux.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "07b970e0aa"
            },
            {
                "id": 114173,
                "track_name": "Light Dances In Your Eyes",
                "track_time": "2:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/85) Trevor Thornton - Light Dances In Your Eyes.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8fbd77083a"
            },
            {
                "id": 114174,
                "track_name": "One More Night",
                "track_time": "3:34",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/86) Oscuro - One More Night.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "71242f515d"
            },
            {
                "id": 114175,
                "track_name": "With Me, With You",
                "track_time": "3:20",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/87) Moux - With Me, With You.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "dbf36d2545"
            },
            {
                "id": 114176,
                "track_name": "Little Home",
                "track_time": "2:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/88) Eik Octobre - Little Home.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8d52c19c7e"
            },
            {
                "id": 114177,
                "track_name": "Rainbow Lullaby",
                "track_time": "1:35",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/89) Angel Ruediger, Pavel Fedorov - Rainbow Lullaby.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "586bc82ec1"
            },
            {
                "id": 114178,
                "track_name": "Intimacy",
                "track_time": "2:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/90) Carlos Hof - Intimacy.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2eae6c908c"
            },
            {
                "id": 114179,
                "track_name": "Reflection I",
                "track_time": "2:14",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/91) Daigo Hanada - Reflection I.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a42e20ef11"
            },
            {
                "id": 114180,
                "track_name": "New York City",
                "track_time": "2:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/92) Dennis Korn, Alena Nadkina - New York City.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3e9f88d09e"
            },
            {
                "id": 114181,
                "track_name": "Butterfly Flight",
                "track_time": "2:59",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/93) Dyathon - Butterfly Flight.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9f647d450a"
            },
            {
                "id": 114182,
                "track_name": "North Sea",
                "track_time": "2:07",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/94) Francesco Berta - North Sea.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "48be47376d"
            },
            {
                "id": 114183,
                "track_name": "Obscura",
                "track_time": "2:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/95) Franco Robert - Obscura.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5257b7805e"
            },
            {
                "id": 114184,
                "track_name": "On The Stairs",
                "track_time": "2:22",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/96) Franz Gordon - On The Stairs.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2230288649"
            },
            {
                "id": 114185,
                "track_name": "Olibanum",
                "track_time": "2:52",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/97) Franz Gordon - Olibanum.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8b4623a3f8"
            },
            {
                "id": 114186,
                "track_name": "Time With You",
                "track_time": "2:43",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/98) Glenn Natale - Time With You.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "80909bf2e9"
            },
            {
                "id": 114187,
                "track_name": "The Fields Of Manitoba",
                "track_time": "2:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Peaceful Piano Vol 14/128k/99) Henri Bentley - The Fields Of Manitoba.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peaceful-Piano-Vol-14-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1796caa0d5"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113818",
            "album_name": "",
            "album_composer": "",
            "album_genre": "",
            "album_thumb": "",
            "album_url": ""
        },
        "musics": [
            {
                "id": "113818",
                "track_name": "Cloud 7 ",
                "track_time": "02:30",
                "track_url": "https://dl.vmusic.ir/2022/02/Peter Ries - Cloud 7 (2022)/128k/Peter Ries - Cloud 7.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Peter-Ries-Cloud-7-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d8ae33ffc4"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113895",
            "album_name": "Your Time Is Now",
            "album_composer": "Christoffer Moe Ditlevsen",
            "album_genre": "Epic, Modern Era",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Christoffer-Moe-Ditlevsen-Your-Time-Is-Now-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/christoffer-moe-ditlevsen-your-time-is-now-2022/"
        },
        "musics": [
            {
                "id": 114009,
                "track_name": "Your Time Is Now",
                "track_time": "2:12",
                "track_url": "https://dl.vmusic.ir/2022/02/Christoffer Moe Ditlevsen - Your Time Is Now (2022)/128k/01) Christoffer Moe Ditlevsen - Your Time Is Now.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Christoffer-Moe-Ditlevsen-Your-Time-Is-Now-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "dfd9971807"
            },
            {
                "id": 114010,
                "track_name": "The Hive Mind Awakens",
                "track_time": "2:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Christoffer Moe Ditlevsen - Your Time Is Now (2022)/128k/02) Christoffer Moe Ditlevsen - The Hive Mind Awakens.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Christoffer-Moe-Ditlevsen-Your-Time-Is-Now-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "912084551f"
            },
            {
                "id": 114011,
                "track_name": "Digital Future",
                "track_time": "2:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Christoffer Moe Ditlevsen - Your Time Is Now (2022)/128k/03) Christoffer Moe Ditlevsen - Digital Future.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Christoffer-Moe-Ditlevsen-Your-Time-Is-Now-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b4062aab67"
            },
            {
                "id": 114012,
                "track_name": "Monarch of Fate",
                "track_time": "3:05",
                "track_url": "https://dl.vmusic.ir/2022/02/Christoffer Moe Ditlevsen - Your Time Is Now (2022)/128k/04) Christoffer Moe Ditlevsen - Monarch of Fate.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Christoffer-Moe-Ditlevsen-Your-Time-Is-Now-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ab5a580df3"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113841",
            "album_name": "In Breath ",
            "album_composer": "Luke Gajdus",
            "album_genre": "Classical Crossover",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/luke-gajdus-in-breath-2022/"
        },
        "musics": [
            {
                "id": 113965,
                "track_name": "Flowing",
                "track_time": "3:30",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/01) Luke Gajdus - Flowing.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "62db767cdf"
            },
            {
                "id": 113966,
                "track_name": "Woodnote",
                "track_time": "2:52",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/02) Luke Gajdus - Woodnote.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6774887db0"
            },
            {
                "id": 113967,
                "track_name": "Dawn Chorus",
                "track_time": "3:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/03) Luke Gajdus - Dawn Chorus.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8bbddb3454"
            },
            {
                "id": 113968,
                "track_name": "Tides",
                "track_time": "4:04",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/04) Luke Gajdus - Tides.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0af6922fb9"
            },
            {
                "id": 113969,
                "track_name": "Old Daydream",
                "track_time": "3:59",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/05) Luke Gajdus - Old Daydream.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0c2e4e5821"
            },
            {
                "id": 113970,
                "track_name": "Nostrano",
                "track_time": "3:13",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/06) Luke Gajdus - Nostrano.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "4938538ca8"
            },
            {
                "id": 113971,
                "track_name": "Dear Sadie",
                "track_time": "4:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/07) Luke Gajdus - Dear Sadie.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d9f548f76f"
            },
            {
                "id": 113972,
                "track_name": "Ephemera",
                "track_time": "2:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/08) Luke Gajdus - Ephemera.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ed8f95c8b1"
            },
            {
                "id": 113973,
                "track_name": "Sway",
                "track_time": "3:07",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/09) Luke Gajdus - Sway.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "416b5192f2"
            },
            {
                "id": 113974,
                "track_name": "Upstream",
                "track_time": "3:40",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/10) Luke Gajdus - Upstream.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8907ff5e57"
            },
            {
                "id": 113975,
                "track_name": "Dreamscape",
                "track_time": "2:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/11) Luke Gajdus - Dreamscape.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2bc51ef354"
            },
            {
                "id": 113976,
                "track_name": "Poiesis",
                "track_time": "3:28",
                "track_url": "https://dl.vmusic.ir/2022/02/Luke Gajdus - In Breath (2022)/128k/12) Luke Gajdus - Poiesis.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Luke-Gajdus-In-Breath-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f78802a90d"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113832",
            "album_name": "Vignette",
            "album_composer": "Michael Logozar",
            "album_genre": "Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/michael-logozar-vignette-2022/"
        },
        "musics": [
            {
                "id": 113948,
                "track_name": "Aria",
                "track_time": "2:37",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/01) Michael Logozar - Aria.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "480b737d37"
            },
            {
                "id": 113949,
                "track_name": "Duet",
                "track_time": "3:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/02) Michael Logozar, Kendra Logozar - Duet.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5b47db2c22"
            },
            {
                "id": 113950,
                "track_name": "Air",
                "track_time": "2:52",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/03) Michael Logozar - Air.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a4980fad61"
            },
            {
                "id": 113951,
                "track_name": "Orbit",
                "track_time": "2:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/04) Michael Logozar - Orbit.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0dffa0f16e"
            },
            {
                "id": 113952,
                "track_name": "Papillon",
                "track_time": "2:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/05) Michael Logozar - Papillon.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9358913ecc"
            },
            {
                "id": 113953,
                "track_name": "Lights",
                "track_time": "2:35",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/06) Michael Logozar - Lights.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0071b35623"
            },
            {
                "id": 113954,
                "track_name": "Somebody",
                "track_time": "2:47",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/07) Michael Logozar - Somebody.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b1d0369d52"
            },
            {
                "id": 113955,
                "track_name": "Vignette",
                "track_time": "2:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/08) Michael Logozar - Vignette.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "73235546a7"
            },
            {
                "id": 113956,
                "track_name": "Waves",
                "track_time": "2:44",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/09) Michael Logozar - Waves.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "bf70fbdf18"
            },
            {
                "id": 113957,
                "track_name": "Still",
                "track_time": "2:56",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/10) Michael Logozar - Still.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "85e5a552fd"
            },
            {
                "id": 113958,
                "track_name": "Silhouette",
                "track_time": "2:49",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/11) Michael Logozar - Silhouette.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5a79f5cf21"
            },
            {
                "id": 113959,
                "track_name": "Prelude",
                "track_time": "2:21",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/12) Michael Logozar - Prelude.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "989d56dc53"
            },
            {
                "id": 113960,
                "track_name": "Amber",
                "track_time": "2:46",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/13) Michael Logozar - Amber.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6a91486e69"
            },
            {
                "id": 113961,
                "track_name": "Your Smile",
                "track_time": "3:14",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/14) Michael Logozar - Your Smile.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fca7d8b0ae"
            },
            {
                "id": 113962,
                "track_name": "Belong",
                "track_time": "2:58",
                "track_url": "https://dl.vmusic.ir/2022/02/Michael Logozar - Vignette (2022)/128k/15) Michael Logozar - Belong.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Michael-Logozar-Vignette-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6cd954ba29"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113823",
            "album_name": "quintain ",
            "album_composer": "Tom Merrall",
            "album_genre": "Classical, Classical Crossover",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Tom-Merrall-quintain-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/tom-merrall-quintain-2022/"
        },
        "musics": [
            {
                "id": 113912,
                "track_name": "from the hills",
                "track_time": "3:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Tom Merrall - quintain (2022)/128k/01) Tom Merrall - from the hills.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Tom-Merrall-quintain-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d9530c3c9b"
            },
            {
                "id": 113913,
                "track_name": "along the shore",
                "track_time": "2:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Tom Merrall - quintain (2022)/128k/02) Tom Merrall - along the shore.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Tom-Merrall-quintain-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8bc5e2cc4f"
            },
            {
                "id": 113914,
                "track_name": "as the rain begins to pour",
                "track_time": "3:46",
                "track_url": "https://dl.vmusic.ir/2022/02/Tom Merrall - quintain (2022)/128k/03) Tom Merrall - as the rain begins to pour.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Tom-Merrall-quintain-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3bce5a2b82"
            },
            {
                "id": 113915,
                "track_name": "as the sun shines, dewdrops glisten",
                "track_time": "2:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Tom Merrall - quintain (2022)/128k/04) Tom Merrall - as the sun shines, dewdrops glisten.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Tom-Merrall-quintain-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7f7e7bb10f"
            },
            {
                "id": 113916,
                "track_name": "and i listen",
                "track_time": "1:57",
                "track_url": "https://dl.vmusic.ir/2022/02/Tom Merrall - quintain (2022)/128k/05) Tom Merrall - and i listen.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Tom-Merrall-quintain-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e5831e0035"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113811",
            "album_name": "Lucid ",
            "album_composer": "Blurstem",
            "album_genre": "Classical, Meditation",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Blurstem-Lucid-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/blurstem-lucid-2022/"
        },
        "musics": [
            {
                "id": 113907,
                "track_name": "Dreamtales",
                "track_time": "2:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Blurstem - Lucid (2022)/128k/01) Blurstem - Dreamtales.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Blurstem-Lucid-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3ddaf2c6af"
            },
            {
                "id": 113908,
                "track_name": "Semblance Of Sleep",
                "track_time": "2:52",
                "track_url": "https://dl.vmusic.ir/2022/02/Blurstem - Lucid (2022)/128k/02) Blurstem - Semblance Of Sleep.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Blurstem-Lucid-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b0c4595a4a"
            },
            {
                "id": 113909,
                "track_name": "Before The Light",
                "track_time": "4:06",
                "track_url": "https://dl.vmusic.ir/2022/02/Blurstem - Lucid (2022)/128k/03) Blurstem - Before The Light.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Blurstem-Lucid-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c0347cd436"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113732",
            "album_name": "Love",
            "album_composer": "The Piano Guys",
            "album_genre": "Classical, Classical Crossover",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/The-Piano-Guys-Love-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/the-piano-guys-love-2022/"
        },
        "musics": [
            {
                "id": 113772,
                "track_name": "River Flows In You",
                "track_time": "3:09",
                "track_url": "https://dl.vmusic.ir/2022/02/The Piano Guys - Love (2022)/128k/01) The Piano Guys, Eli Nelson - River Flows In You.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/The-Piano-Guys-Love-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "50f09bde76"
            },
            {
                "id": 113773,
                "track_name": "My Girl",
                "track_time": "3:56",
                "track_url": "https://dl.vmusic.ir/2022/02/The Piano Guys - Love (2022)/128k/02) The Piano Guys - My Girl.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/The-Piano-Guys-Love-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "eef8d52f2b"
            },
            {
                "id": 113774,
                "track_name": "You Are The Reason",
                "track_time": "3:55",
                "track_url": "https://dl.vmusic.ir/2022/02/The Piano Guys - Love (2022)/128k/03) The Piano Guys, Dallas String Quartet - You Are The Reason.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/The-Piano-Guys-Love-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f95830fbd1"
            },
            {
                "id": 113775,
                "track_name": "I Will Always Love You",
                "track_time": "3:08",
                "track_url": "https://dl.vmusic.ir/2022/02/The Piano Guys - Love (2022)/128k/04) The Piano Guys - I Will Always Love You.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/The-Piano-Guys-Love-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "77e059c664"
            },
            {
                "id": 113776,
                "track_name": "Someone Like You",
                "track_time": "3:59",
                "track_url": "https://dl.vmusic.ir/2022/02/The Piano Guys - Love (2022)/128k/05) The Piano Guys - Someone Like You.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/The-Piano-Guys-Love-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "4afe889945"
            },
            {
                "id": 113777,
                "track_name": "Every Breath You Take",
                "track_time": "4:32",
                "track_url": "https://dl.vmusic.ir/2022/02/The Piano Guys - Love (2022)/128k/06) The Piano Guys - Every Breath You Take.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/The-Piano-Guys-Love-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e91c847e96"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113605",
            "album_name": "Sabri",
            "album_composer": "Lobató",
            "album_genre": "Classical, Modern Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/lobato-sabri-2022/"
        },
        "musics": [
            {
                "id": 113628,
                "track_name": "L'oiseau des bois",
                "track_time": "1:17",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/01) Lobató - L'oiseau des bois.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d8db2a3ebd"
            },
            {
                "id": 113629,
                "track_name": "Voltige",
                "track_time": "1:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/02) Lobató - Voltige.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8464bc2135"
            },
            {
                "id": 113630,
                "track_name": "Elle chante encore",
                "track_time": "2:22",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/03) Lobató - Elle chante encore.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "623c1cb5af"
            },
            {
                "id": 113631,
                "track_name": "Un rêve lucide",
                "track_time": "2:22",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/04) Lobató - Un rêve lucide.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "406c486b90"
            },
            {
                "id": 113632,
                "track_name": "Impasse secrète",
                "track_time": "2:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/05) Lobató - Impasse secrète.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0caeb3c99c"
            },
            {
                "id": 113633,
                "track_name": "Bruissement des feuilles",
                "track_time": "1:43",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/06) Lobató - Bruissement des feuilles.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3b36252bb8"
            },
            {
                "id": 113634,
                "track_name": "Les étoiles de l'Alcazar",
                "track_time": "1:39",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/07) Lobató - Les étoiles de l'Alcazar.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5abafb4fba"
            },
            {
                "id": 113635,
                "track_name": "Empathie silencieuse",
                "track_time": "2:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/08) Lobató - Empathie silencieuse.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "055224d8e8"
            },
            {
                "id": 113636,
                "track_name": "Son labyrinthe",
                "track_time": "2:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/09) Lobató - Son labyrinthe.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "be1645ea95"
            },
            {
                "id": 113637,
                "track_name": "Une solution élégante",
                "track_time": "1:09",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/10) Lobató - Une solution élégante.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "eb14267eda"
            },
            {
                "id": 113638,
                "track_name": "La chaleur de sa grâce",
                "track_time": "1:37",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/11) Lobató - La chaleur de sa grâce.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "85f3f985d0"
            },
            {
                "id": 113639,
                "track_name": "Forêt d'hiver",
                "track_time": "1:17",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/12) Lobató - Forêt d'hiver.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f0857b728c"
            },
            {
                "id": 113640,
                "track_name": "Une âme pure",
                "track_time": "2:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/13) Lobató - Une âme pure.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f0f1e9096e"
            },
            {
                "id": 113641,
                "track_name": "Pensées fascinantes",
                "track_time": "1:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/14) Lobató - Pensées fascinantes.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0573f2192c"
            },
            {
                "id": 113642,
                "track_name": "En su santuario",
                "track_time": "2:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/15) Lobató - En su santuario.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5751898f7e"
            },
            {
                "id": 113643,
                "track_name": "Elle parle en couleurs",
                "track_time": "2:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Lobató - Sabri (2022)/128k/16) Lobató - Elle parle en couleurs.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Lobato-Sabri-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "385a866284"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113559",
            "album_name": "",
            "album_composer": "",
            "album_genre": "",
            "album_thumb": "",
            "album_url": ""
        },
        "musics": [
            {
                "id": "113559",
                "track_name": "The Long Road",
                "track_time": "06:15",
                "track_url": "https://dl.vmusic.ir/2022/02/Moises Daniel - The Long Road (2022)/128k/Moises Daniel - The Long Road.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Moises-Daniel-The-Long-Road-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6fe87a5dc3"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113449",
            "album_name": "aubades",
            "album_composer": "Jean-Michel Blais",
            "album_genre": "Classical Crossover",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/%d8%a7%d8%a8%d8%a7%d8%af%d8%b3-%da%98%d8%a7%d9%86-%d9%85%db%8c%d8%b4%d9%84-%d8%a8%d9%84%d8%b3/"
        },
        "musics": [
            {
                "id": 113452,
                "track_name": "Murmures",
                "track_time": "5:07",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/01) Jean Michel Blais - Murmures.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "bd0ddc28fd"
            },
            {
                "id": 113453,
                "track_name": "Passepied",
                "track_time": "3:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/02) Jean Michel Blais - Passepied.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e83db518c0"
            },
            {
                "id": 113454,
                "track_name": "Nina",
                "track_time": "3:14",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/03) Jean Michel Blais - Nina.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e4f8cda099"
            },
            {
                "id": 113455,
                "track_name": "Flâneur",
                "track_time": "2:13",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/04) Jean Michel Blais - Flâneur.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "996c99d9b5"
            },
            {
                "id": 113456,
                "track_name": "Ouessant",
                "track_time": "3:56",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/05) Jean Michel Blais - Ouessant.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5a48c90ba2"
            },
            {
                "id": 113457,
                "track_name": "If You Build It, They Will Come",
                "track_time": "4:25",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/06) Jean Michel Blais - If You Build It, They Will Come.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d1a86862ee"
            },
            {
                "id": 113458,
                "track_name": "Amour",
                "track_time": "4:38",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/07) Jean Michel Blais - Amour.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "690fea7951"
            },
            {
                "id": 113459,
                "track_name": "Yanni",
                "track_time": "4:40",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/08) Jean Michel Blais - Yanni.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a0e4583202"
            },
            {
                "id": 113460,
                "track_name": "Absinthe",
                "track_time": "2:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/09) Jean Michel Blais - Absinthe.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a04e166ebe"
            },
            {
                "id": 113461,
                "track_name": "Carrousel",
                "track_time": "2:29",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/10) Jean Michel Blais - Carrousel.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "bd2769a8ce"
            },
            {
                "id": 113462,
                "track_name": "Doux",
                "track_time": "4:48",
                "track_url": "https://dl.vmusic.ir/2022/02/Jean Michel Blais - aubades (2022)/128k/11) Jean Michel Blais - Doux.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jean-Michel-Blais-aubades-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5b5e5b452d"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113434",
            "album_name": "Serenity",
            "album_composer": "Chris Snelling",
            "album_genre": "Modern Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/chris-snelling-serenity-2022/"
        },
        "musics": [
            {
                "id": 113437,
                "track_name": "Two Weeks",
                "track_time": "2:09",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/01) Chris Snelling - Two Weeks.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "53c3f75e7a"
            },
            {
                "id": 113438,
                "track_name": "Until",
                "track_time": "3:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/02) Chris Snelling - Until.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6368d1afcb"
            },
            {
                "id": 113439,
                "track_name": "Overshadowed",
                "track_time": "3:01",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/03) Chris Snelling - Overshadowed.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f37776267f"
            },
            {
                "id": 113440,
                "track_name": "Desertion",
                "track_time": "2:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/04) Chris Snelling - Desertion.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d2ca3c7e62"
            },
            {
                "id": 113441,
                "track_name": "Unanswered",
                "track_time": "2:50",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/05) Chris Snelling - Unanswered.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "bfc6480f59"
            },
            {
                "id": 113442,
                "track_name": "At The Border",
                "track_time": "2:15",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/06) Chris Snelling - At The Border.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "61aae5664c"
            },
            {
                "id": 113443,
                "track_name": "I Know",
                "track_time": "2:27",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/07) Chris Snelling - I Know.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f832832994"
            },
            {
                "id": 113444,
                "track_name": "Stranger On The Shore (Arr. For Piano",
                "track_time": "3:06",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/08) Bernard Stanley Bilk, Chris Snelling - Stranger On The Shore (Arr. For Piano).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c5528fd731"
            },
            {
                "id": 113445,
                "track_name": "Tentative Steps",
                "track_time": "3:12",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/09) Chris Snelling - Tentative Steps.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": false,
                "nonce": "762e5c6bc5"
            },
            {
                "id": 113446,
                "track_name": "Those Last Days",
                "track_time": "3:05",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/10) Chris Snelling - Those Last Days.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "599979b3eb"
            },
            {
                "id": 113447,
                "track_name": "Estranged",
                "track_time": "3:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Chris Snelling - Serenity (2022)/128k/11) Chris Snelling - Estranged.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Chris-Snelling-Serenity-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "e287a98d12"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113260",
            "album_name": "Yann Tiersen _ Eusa",
            "album_composer": "Alessandro Simonetto, Yann Tiersen",
            "album_genre": "Modern Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Yann-Tiersen-Yann-Tiersen-_-Eusa-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/%db%8c%d8%a7%d9%86-%d8%aa%db%8c%d8%b1%d8%b3%d9%86-%db%8c%d9%88%d8%b3%d8%a7-%d8%a7%d9%84%d8%b3%d8%a7%d9%86%d8%af%d8%b1%d9%88-%d8%b3%db%8c%d9%85%d9%88%d9%86%d8%aa%d9%88/"
        },
        "musics": [
            {
                "id": 113263,
                "track_name": "Eusa (Excerpts) No. 3, Lok Gweltaz",
                "track_time": "3:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Yann Tiersen - Yann Tiersen _ Eusa (2022)/128k/01) Yann Tiersen - Eusa (Excerpts) No. 3, Lok Gweltaz.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Yann-Tiersen-Yann-Tiersen-_-Eusa-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f6fe299189"
            },
            {
                "id": 113264,
                "track_name": "Eusa (Excerpts) No. 6, Yuzin",
                "track_time": "2:01",
                "track_url": "https://dl.vmusic.ir/2022/02/Yann Tiersen - Yann Tiersen _ Eusa (2022)/128k/02) Yann Tiersen - Eusa (Excerpts) No. 6, Yuzin.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Yann-Tiersen-Yann-Tiersen-_-Eusa-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9907bc6ee2"
            },
            {
                "id": 113265,
                "track_name": "Eusa (Excerpts) No. 9, Enez Nein",
                "track_time": "4:29",
                "track_url": "https://dl.vmusic.ir/2022/02/Yann Tiersen - Yann Tiersen _ Eusa (2022)/128k/03) Yann Tiersen - Eusa (Excerpts) No. 9, Enez Nein.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Yann-Tiersen-Yann-Tiersen-_-Eusa-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "40d9046090"
            },
            {
                "id": 113266,
                "track_name": "Eusa (Excerpts) No. 10, Kadoran",
                "track_time": "2:04",
                "track_url": "https://dl.vmusic.ir/2022/02/Yann Tiersen - Yann Tiersen _ Eusa (2022)/128k/04) Yann Tiersen - Eusa (Excerpts) No. 10, Kadoran.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Yann-Tiersen-Yann-Tiersen-_-Eusa-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "97f84ee5e2"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113252",
            "album_name": "The Medallion of Three Snakes",
            "album_composer": "Egor Grushin",
            "album_genre": "Classical Crossover",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Egor-Grushin-The-Medallion-of-Three-Snakes-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/egor-grushin-the-medallion-of-three-snakes-2022/"
        },
        "musics": [
            {
                "id": 113255,
                "track_name": "Rebirth",
                "track_time": "1:58",
                "track_url": "https://dl.vmusic.ir/2022/02/Egor Grushin - The Medallion of Three Snakes (2022)/128k/01) Egor Grushin - Rebirth.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Egor-Grushin-The-Medallion-of-Three-Snakes-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "666db9b282"
            },
            {
                "id": 113256,
                "track_name": "The End Of The World",
                "track_time": "1:47",
                "track_url": "https://dl.vmusic.ir/2022/02/Egor Grushin - The Medallion of Three Snakes (2022)/128k/02) Egor Grushin - The End Of The World.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Egor-Grushin-The-Medallion-of-Three-Snakes-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2e9e3554f4"
            },
            {
                "id": 113257,
                "track_name": "After The Storm",
                "track_time": "1:44",
                "track_url": "https://dl.vmusic.ir/2022/02/Egor Grushin - The Medallion of Three Snakes (2022)/128k/03) Egor Grushin - After The Storm.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Egor-Grushin-The-Medallion-of-Three-Snakes-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "375afe618e"
            },
            {
                "id": 113258,
                "track_name": "Man In Eden",
                "track_time": "1:24",
                "track_url": "https://dl.vmusic.ir/2022/02/Egor Grushin - The Medallion of Three Snakes (2022)/128k/04) Egor Grushin - Man In Eden.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Egor-Grushin-The-Medallion-of-Three-Snakes-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fd368192f0"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "113170",
            "album_name": "Classical New Releases 52",
            "album_composer": "Vmusic PlayList",
            "album_genre": "Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
            "album_url": "https://vmusic.ir/playlist/classical-new-releases-52/"
        },
        "musics": [
            {
                "id": 113173,
                "track_name": "Nocturnal",
                "track_time": "5:13",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/01) Classical New Releases - Nocturnal.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6bec793c76"
            },
            {
                "id": 113174,
                "track_name": "Berceuse In D-Flat Major, Op. 57",
                "track_time": "5:40",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/02) Classical New Releases - Berceuse In D-Flat Major, Op. 57.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1266fce4f1"
            },
            {
                "id": 113175,
                "track_name": "Time",
                "track_time": "4:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/03) Classical New Releases - Time - From Inception.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8f90f2e20a"
            },
            {
                "id": 113176,
                "track_name": "Satie Variation (Arr. For Violin & Piano After Gymnopédie No. 1 By Svetoslav Karparov",
                "track_time": "2:28",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/04) Classical New Releases - Satie Variation (Arr. For Violin & Piano After Gymnopédie No. 1 By Svetoslav Karparov).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "4d5b581005"
            },
            {
                "id": 113177,
                "track_name": "Fingers Crossed (Arr. Piano",
                "track_time": "3:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/05) Classical New Releases - Fingers Crossed (Arr. Piano).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5489484c80"
            },
            {
                "id": 113178,
                "track_name": "The Four Seasons, Violin Concerto No. 4 In F Minor, Rv 297 Winter Ii. Largo",
                "track_time": "2:02",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/06) Classical New Releases - The Four Seasons, Violin Concerto No. 4 In F Minor, Rv 297 Winter Ii. Largo.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b134ea7c8e"
            },
            {
                "id": 113179,
                "track_name": "Fljótavik (Arr. For Violin And String Orchestra",
                "track_time": "4:20",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/07) Classical New Releases - Fljótavik (Arr. For Violin And String Orchestra).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "149153f9b9"
            },
            {
                "id": 113180,
                "track_name": "Nocturne Op. 62, No. 2 In E Major",
                "track_time": "7:42",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/08) Classical New Releases - Nocturne Op. 62, No. 2 In E Major.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1a9be09004"
            },
            {
                "id": 113181,
                "track_name": "Peer Gynt, Op. 23 Solveig's Song",
                "track_time": "4:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/09) Classical New Releases - Peer Gynt, Op. 23 Solveig's Song - Arr. For Violin & String Orchestra By Tormod Tvete Vik.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7397dd961b"
            },
            {
                "id": 113182,
                "track_name": "Vier Sinfonische Zwischenspiele Aus Intermezzo, Trv 246A Ii. Träumerei Am Kamin",
                "track_time": "8:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/10) Classical New Releases - Vier Sinfonische Zwischenspiele Aus Intermezzo, Trv 246A Ii. Träumerei Am Kamin.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fd8665a515"
            },
            {
                "id": 113183,
                "track_name": "Ii. Romance (Cadenza By Johann Nepomuk Hummel",
                "track_time": "9:02",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/11) Classical New Releases - Ii. Romance (Cadenza By Johann Nepomuk Hummel).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "65e8afdf3e"
            },
            {
                "id": 113184,
                "track_name": "A Faint Qualm For The Future",
                "track_time": "2:41",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/12) Classical New Releases - A Faint Qualm For The Future.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2ade741b08"
            },
            {
                "id": 113185,
                "track_name": "Eliza Aria (Arr. For Violin And String Ensemble By François Vallières And Angèle Dubeau",
                "track_time": "3:25",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/13) Classical New Releases - Eliza Aria (Arr. For Violin And String Ensemble By François Vallières And Angèle Dubeau).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "47fc3b9d78"
            },
            {
                "id": 113186,
                "track_name": "Goldberg Variations, Bwv 988 Xxvi. Variatio 30, Quodlibet",
                "track_time": "2:02",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/14) Classical New Releases - Goldberg Variations, Bwv 988 Xxvi. Variatio 30, Quodlibet.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d95485e4ef"
            },
            {
                "id": 113187,
                "track_name": "Mirror",
                "track_time": "3:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/15) Classical New Releases - Mirror.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3064d3a0d7"
            },
            {
                "id": 113188,
                "track_name": "Ae Fond Kiss",
                "track_time": "3:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/16) Classical New Releases - Ae Fond Kiss.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "25a8f1874f"
            },
            {
                "id": 113189,
                "track_name": "Beethoven Piano Sonata No. 14 In C-Sharp Minor, Op. 27, No. 2, “moonlight” I. Adagio Sostenuto",
                "track_time": "5:07",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/17) Classical New Releases - Beethoven Piano Sonata No. 14 In C-Sharp Minor, Op. 27, No. 2, “moonlight” I. Adagio Sostenuto - Arr. By A.R. Rahman.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9734624dc2"
            },
            {
                "id": 113190,
                "track_name": "Piano Trio In D Minor, Op. 11 Iii. Lied. Allegretto",
                "track_time": "2:35",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/18) Classical New Releases - Piano Trio In D Minor, Op. 11 Iii. Lied. Allegretto.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3bf19ce11e"
            },
            {
                "id": 113191,
                "track_name": "String Quartet No. 6 In B-Flat Major, Kv 159 Ii. Allegro",
                "track_time": "5:06",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/19) Classical New Releases - String Quartet No. 6 In B-Flat Major, Kv 159 Ii. Allegro.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a6b67b049f"
            },
            {
                "id": 113192,
                "track_name": "Rewind",
                "track_time": "3:07",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/20) Classical New Releases - Rewind.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "49f071cdff"
            },
            {
                "id": 113193,
                "track_name": "Suite Bergamasque Iii. Clair De Lune",
                "track_time": "4:46",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/21) Classical New Releases - Suite Bergamasque Iii. Clair De Lune.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "39a5dccd8f"
            },
            {
                "id": 113194,
                "track_name": "Dono Per Un Addio",
                "track_time": "4:22",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/22) Classical New Releases - Dono Per Un Addio.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f1503d6d17"
            },
            {
                "id": 113195,
                "track_name": "Finding Peace",
                "track_time": "3:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/23) Classical New Releases - Finding Peace.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a2eb4ff1ac"
            },
            {
                "id": 113196,
                "track_name": "Sonata, Op. 7 No. 3, Kv. 454 Iii. Allegretto",
                "track_time": "7:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/24) Classical New Releases - Sonata, Op. 7 No. 3, Kv. 454 Iii. Allegretto.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "38b0dcb4fc"
            },
            {
                "id": 113197,
                "track_name": "Piano Concerto In D Major, Op. 61A Iii. Rondo",
                "track_time": "9:09",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/25) Classical New Releases - Piano Concerto In D Major, Op. 61A Iii. Rondo.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0bbc6d6863"
            },
            {
                "id": 113198,
                "track_name": "La Promesse (Deep Pianos",
                "track_time": "3:48",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/26) Classical New Releases - La Promesse (Deep Pianos).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ee8c795df1"
            },
            {
                "id": 113199,
                "track_name": "Ravel Ondine",
                "track_time": "8:24",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/27) Classical New Releases - Ravel Ondine.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7d556cae67"
            },
            {
                "id": 113200,
                "track_name": "Finding The Heavens",
                "track_time": "2:47",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/28) Classical New Releases - Finding The Heavens.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f5f6b1f964"
            },
            {
                "id": 113201,
                "track_name": "Cohesion",
                "track_time": "3:13",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/29) Classical New Releases - Cohesion.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "538cadd274"
            },
            {
                "id": 113202,
                "track_name": "Suite In G Major Iv. Burlesca. Allegretto Con Moto",
                "track_time": "3:56",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/30) Classical New Releases - Suite In G Major Iv. Burlesca. Allegretto Con Moto.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7f61ca21ba"
            },
            {
                "id": 113203,
                "track_name": "Contemplation Suite I. Dawn",
                "track_time": "4:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/31) Classical New Releases - Contemplation Suite I. Dawn.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5929265634"
            },
            {
                "id": 113204,
                "track_name": "Arpeggione Sonata, D. 821 Ii. Adagio (Arr. For Cello And Guitar By Stephan Schmidt",
                "track_time": "3:59",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/32) Classical New Releases - Arpeggione Sonata, D. 821 Ii. Adagio (Arr. For Cello And Guitar By Stephan Schmidt).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b3c74ee83d"
            },
            {
                "id": 113205,
                "track_name": "Violin Sonata In F Minor, Op. 4 Iii. Allegro Agitato",
                "track_time": "4:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/33) Classical New Releases - Violin Sonata In F Minor, Op. 4 Iii. Allegro Agitato.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2ed907ef86"
            },
            {
                "id": 113206,
                "track_name": "Solace Waltz",
                "track_time": "2:51",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/34) Classical New Releases - Solace Waltz.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "45583fef24"
            },
            {
                "id": 113207,
                "track_name": "To Be Loved",
                "track_time": "2:32",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/35) Classical New Releases - To Be Loved.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8c6019832a"
            },
            {
                "id": 113208,
                "track_name": "Mitridate, Rè Di Ponto, K. 87 Se Viver Non Degg'io (Arr. James Strauss",
                "track_time": "5:22",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/36) Classical New Releases - Mitridate, Rè Di Ponto, K. 87 Se Viver Non Degg'io (Arr. James Strauss).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b280f6f1bb"
            },
            {
                "id": 113209,
                "track_name": "Caprice No. 21 In A-Major (From 24 Caprices, Op. 1",
                "track_time": "3:20",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/37) Classical New Releases - Caprice No. 21 In A-Major (From 24 Caprices, Op. 1.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "db78bc9a7e"
            },
            {
                "id": 113210,
                "track_name": "Oblivion",
                "track_time": "5:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/38) Classical New Releases - Oblivion.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f1e1542776"
            },
            {
                "id": 113211,
                "track_name": "Requiem",
                "track_time": "2:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/39) Classical New Releases - Requiem.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "df423231f8"
            },
            {
                "id": 113212,
                "track_name": "Valse Romantique, L. 71",
                "track_time": "4:50",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/40) Classical New Releases - Valse Romantique, L. 71.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9fc8c45aeb"
            },
            {
                "id": 113213,
                "track_name": "Amitié Éternelle",
                "track_time": "2:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/41) Classical New Releases - Amitié Éternelle.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "2710d4e7c6"
            },
            {
                "id": 113214,
                "track_name": "Amour",
                "track_time": "4:38",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/42) Classical New Releases - Amour.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3005abd931"
            },
            {
                "id": 113215,
                "track_name": "Adoration (Version For Solo Violin And String Orchestra",
                "track_time": "3:52",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/43) Classical New Releases - Adoration (Version For Solo Violin And String Orchestra).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "35cd36fb5a"
            },
            {
                "id": 113216,
                "track_name": "33 Variations In C Major, Op. 120 On A Waltz By Diabelli Tema. Vivace",
                "track_time": "0:53",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/44) Classical New Releases - 33 Variations In C Major, Op. 120 On A Waltz By Diabelli Tema. Vivace.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1287964c12"
            },
            {
                "id": 113217,
                "track_name": "Le Nozze Di Figaro, K.492 Voi Che Sapete",
                "track_time": "2:44",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/45) Classical New Releases - Le Nozze Di Figaro, K.492 Voi Che Sapete - Arr. For Horn & String Quartet.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d1dcaf0e93"
            },
            {
                "id": 113218,
                "track_name": "Crisantemi, Sc 65",
                "track_time": "7:31",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/46) Classical New Releases - Crisantemi, Sc 65.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7e7a3e2850"
            },
            {
                "id": 113219,
                "track_name": "Ii. Floating Leaf",
                "track_time": "2:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/47) Classical New Releases - Ii. Floating Leaf.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "17d0474ce8"
            },
            {
                "id": 113220,
                "track_name": "Drei Klavierstücke, D946 Iii. Allegro",
                "track_time": "5:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/48) Classical New Releases - Drei Klavierstücke, D946 Iii. Allegro.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "375a04003c"
            },
            {
                "id": 113221,
                "track_name": "I",
                "track_time": "2:33",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/49) Classical New Releases - I - A Colors Show.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d22204b589"
            },
            {
                "id": 113222,
                "track_name": "Immortal Beloved",
                "track_time": "3:54",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/50) Classical New Releases - Immortal Beloved.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b4790c4eae"
            },
            {
                "id": 113223,
                "track_name": "Hemera",
                "track_time": "2:35",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/51) Classical New Releases - Hemera.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "df142c8a73"
            },
            {
                "id": 113224,
                "track_name": "Violin Concerto In B Minor, Rv. 384 Ii. Largo",
                "track_time": "3:47",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/52) Classical New Releases - Violin Concerto In B Minor, Rv. 384 Ii. Largo.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "46f978bc29"
            },
            {
                "id": 113225,
                "track_name": "Andante Con Espressione For Violin & Piano",
                "track_time": "4:50",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/53) Classical New Releases - Andante Con Espressione For Violin & Piano.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f0d1b783a1"
            },
            {
                "id": 113226,
                "track_name": "The Entertainer",
                "track_time": "3:15",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/54) Classical New Releases - The Entertainer.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6a73ee7ddb"
            },
            {
                "id": 113227,
                "track_name": "Arrival Of The Birds",
                "track_time": "4:06",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/55) Classical New Releases - Arrival Of The Birds.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f21638d283"
            },
            {
                "id": 113228,
                "track_name": "Lieder Ohne Worte, Book 4, Op. 53 No. 1 In A-Flat Major, Mwv U 143",
                "track_time": "3:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/56) Classical New Releases - Lieder Ohne Worte, Book 4, Op. 53 No. 1 In A-Flat Major, Mwv U 143.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6b3586f02f"
            },
            {
                "id": 113229,
                "track_name": "Almira, Hwv 1 (Excerpts",
                "track_time": "1:57",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/57) Classical New Releases - Almira, Hwv 1 (Excerpts) Sarabande.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7905c4548d"
            },
            {
                "id": 113230,
                "track_name": "Across Borders",
                "track_time": "2:36",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/58) Classical New Releases - Across Borders.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "35d94c1c73"
            },
            {
                "id": 113231,
                "track_name": "Missa Hercules Dux Ferrariae, Nje 11.1 Kyrie (Arr. M. Haimovitz For Cello Quartet",
                "track_time": "2:37",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/59) Classical New Releases - Missa Hercules Dux Ferrariae, Nje 11.1 Kyrie (Arr. M. Haimovitz For Cello Quartet).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6955d35487"
            },
            {
                "id": 113232,
                "track_name": "Horn Concerto In E-Flat Major Iii. Allegro",
                "track_time": "5:05",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/60) Classical New Releases - Horn Concerto In E-Flat Major Iii. Allegro.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "738bc065cc"
            },
            {
                "id": 113233,
                "track_name": "Piano Quintet In A Minor Ii. Andante Con Moto",
                "track_time": "6:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/61) Classical New Releases - Piano Quintet In A Minor Ii. Andante Con Moto.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7b1924875e"
            },
            {
                "id": 113234,
                "track_name": "String Quartet No. 1 See The Grass Is Full Of Stars Ii. Meditation",
                "track_time": "5:25",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/62) Classical New Releases - String Quartet No. 1 See The Grass Is Full Of Stars Ii. Meditation.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "39cdbf07ae"
            },
            {
                "id": 113235,
                "track_name": "Au Sein De La Nature Iii. Le Murmure Des Blés",
                "track_time": "3:28",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/63) Classical New Releases - Au Sein De La Nature Iii. Le Murmure Des Blés.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b346259833"
            },
            {
                "id": 113236,
                "track_name": "Ouverture-Suite In A Minor, Twv 55 A2 Ii. Les Plaisirs",
                "track_time": "3:10",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/64) Classical New Releases - Ouverture-Suite In A Minor, Twv 55 A2 Ii. Les Plaisirs.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "670ab7adc4"
            },
            {
                "id": 113237,
                "track_name": "The Deserted Garden",
                "track_time": "2:04",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/65) Classical New Releases - The Deserted Garden.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "9ca1ec4ada"
            },
            {
                "id": 113238,
                "track_name": "Symphony No. 6 In A Minor Iii. Etwas Zurückhaltend (Arr. For Piano By Beatrice Berrut",
                "track_time": "4:48",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/66) Classical New Releases - Symphony No. 6 In A Minor Iii. Etwas Zurückhaltend (Arr. For Piano By Beatrice Berrut).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "c73528e399"
            },
            {
                "id": 113239,
                "track_name": "Main Theme (From Star Wars",
                "track_time": "0:47",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/67) Classical New Releases - Main Theme (From Star Wars).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "cf7aa31514"
            },
            {
                "id": 113240,
                "track_name": "Feel",
                "track_time": "2:40",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/68) Classical New Releases - Feel - Piano Solo.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "1073d7f894"
            },
            {
                "id": 113241,
                "track_name": "Siete Canciones Populares Españolas Iii. Asturiana",
                "track_time": "3:05",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/69) Classical New Releases - Siete Canciones Populares Españolas Iii. Asturiana.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7fd01784ec"
            },
            {
                "id": 113242,
                "track_name": "Devotion",
                "track_time": "2:30",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/70) Classical New Releases - Devotion.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8a160825ab"
            },
            {
                "id": 113243,
                "track_name": "Vilma",
                "track_time": "2:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/71) Classical New Releases - Vilma.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "af8a184ae9"
            },
            {
                "id": 113244,
                "track_name": "Thru Landscapes (Arrival",
                "track_time": "4:32",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/72) Classical New Releases - Thru Landscapes (Arrival).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d9034a465f"
            },
            {
                "id": 113245,
                "track_name": "Sonata No. 4, Hob. Xvi G1 I. Allegro",
                "track_time": "3:25",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/73) Classical New Releases - Sonata No. 4, Hob. Xvi G1 I. Allegro.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "50029d2743"
            },
            {
                "id": 113246,
                "track_name": "Carnaval, Op. 9 5. Eusebius",
                "track_time": "2:28",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/74) Classical New Releases - Carnaval, Op. 9 5. Eusebius.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7a9e1806cf"
            },
            {
                "id": 113247,
                "track_name": "Vandring",
                "track_time": "5:28",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/75) Classical New Releases - Vandring.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "262c0df979"
            },
            {
                "id": 113248,
                "track_name": "Navždy, Op. 12 No. 1",
                "track_time": "3:03",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/76) Classical New Releases - Navždy, Op. 12 No. 1.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "61abce3283"
            },
            {
                "id": 113249,
                "track_name": "String Quartet In E Minor, Op. 83 I. Allegro Moderato (Arr. D. Matthews For String Orchestra",
                "track_time": "8:49",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/77) Classical New Releases - String Quartet In E Minor, Op. 83 I. Allegro Moderato (Arr. D. Matthews For String Orchestra).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "22f399cfa0"
            },
            {
                "id": 113250,
                "track_name": "Lightness Of Being",
                "track_time": "1:32",
                "track_url": "https://dl.vmusic.ir/2022/02/Classical New Releases 52/128k/78) Classical New Releases - Lightness Of Being.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Classical-New-Releases-52-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "933ed90c33"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "112906",
            "album_name": "",
            "album_composer": "",
            "album_genre": "",
            "album_thumb": "",
            "album_url": ""
        },
        "musics": [
            {
                "id": "112906",
                "track_name": "Thru Landscapes",
                "track_time": "04:32",
                "track_url": "https://dl.vmusic.ir/2022/02/Dirk Maassen - Thru Landscapes (2022)/128k/Dirk Maassen - Thru Landscapes (Arrival).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Dirk-Maassen-Thru-Landscapes-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ad742026aa"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "112862",
            "album_name": "Higher Ground",
            "album_composer": "Anna Phoebe",
            "album_genre": "Classical Crossover",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Anna-Phoebe-Higher-Ground-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/anna-phoebe-higher-ground-2022/"
        },
        "musics": [
            {
                "id": 112866,
                "track_name": "Matter",
                "track_time": "2:13",
                "track_url": "https://dl.vmusic.ir/2022/02/Anna Phoebe - Higher Ground (2022)/128k/01) Anna Phoebe - Matter.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Anna-Phoebe-Higher-Ground-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "3d136c9a20"
            },
            {
                "id": 112867,
                "track_name": "Silhouettes",
                "track_time": "2:30",
                "track_url": "https://dl.vmusic.ir/2022/02/Anna Phoebe - Higher Ground (2022)/128k/02) Anna Phoebe - Silhouettes.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Anna-Phoebe-Higher-Ground-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "b6db7312de"
            },
            {
                "id": 112868,
                "track_name": "Feel What You Need",
                "track_time": "3:01",
                "track_url": "https://dl.vmusic.ir/2022/02/Anna Phoebe - Higher Ground (2022)/128k/03) Anna Phoebe - Feel What You Need.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Anna-Phoebe-Higher-Ground-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0f50b184d8"
            },
            {
                "id": 112869,
                "track_name": "Flight",
                "track_time": "1:44",
                "track_url": "https://dl.vmusic.ir/2022/02/Anna Phoebe - Higher Ground (2022)/128k/04) Anna Phoebe - Flight.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Anna-Phoebe-Higher-Ground-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5232513735"
            },
            {
                "id": 112870,
                "track_name": "Chronicle",
                "track_time": "2:38",
                "track_url": "https://dl.vmusic.ir/2022/02/Anna Phoebe - Higher Ground (2022)/128k/05) Anna Phoebe - Chronicle.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Anna-Phoebe-Higher-Ground-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "fca1f082db"
            },
            {
                "id": 112871,
                "track_name": "Dreamers",
                "track_time": "2:16",
                "track_url": "https://dl.vmusic.ir/2022/02/Anna Phoebe - Higher Ground (2022)/128k/06) Anna Phoebe - Dreamers.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Anna-Phoebe-Higher-Ground-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "5159691e4b"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "112756",
            "album_name": "Viajando con Albéniz",
            "album_composer": "Jesús Ángel",
            "album_genre": "Classical",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jesus-Angel-Viajando-con-Albeniz-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/jesus-angel-viajando-con-albeniz-2022/"
        },
        "musics": [
            {
                "id": 112759,
                "track_name": "Suite Española No.1, Op. 47 I. Granada, Serenata",
                "track_time": "4:19",
                "track_url": "https://dl.vmusic.ir/2022/02/Jesús Ángel - Viajando con Albéniz (2022)/128k/01) Jesús Ángel - Suite Española No.1, Op. 47 I. Granada, Serenata - Allegretto F Major.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jesus-Angel-Viajando-con-Albeniz-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0c0532de1d"
            },
            {
                "id": 112760,
                "track_name": "Suite Española No.1, Op. 47 V. Asturias, Allegro Ma Non Troppo",
                "track_time": "6:17",
                "track_url": "https://dl.vmusic.ir/2022/02/Jesús Ángel - Viajando con Albéniz (2022)/128k/02) Jesús Ángel - Suite Española No.1, Op. 47 V. Asturias, Allegro Ma Non Troppo.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jesus-Angel-Viajando-con-Albeniz-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "f735896bb2"
            },
            {
                "id": 112761,
                "track_name": "España, Op. 165 Ii. Tango",
                "track_time": "2:38",
                "track_url": "https://dl.vmusic.ir/2022/02/Jesús Ángel - Viajando con Albéniz (2022)/128k/03) Jesús Ángel - España, Op. 165 Ii. Tango.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jesus-Angel-Viajando-con-Albeniz-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "88b70178ca"
            },
            {
                "id": 112762,
                "track_name": "Suite Española No. 1, Op. 47 Iii. Sevilla",
                "track_time": "4:18",
                "track_url": "https://dl.vmusic.ir/2022/02/Jesús Ángel - Viajando con Albéniz (2022)/128k/04) Jesús Ángel - Suite Española No. 1, Op. 47 Iii. Sevilla - Sevillana (No Tempo, G Major).mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jesus-Angel-Viajando-con-Albeniz-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "6f15d73278"
            },
            {
                "id": 112763,
                "track_name": "Recuerdos De Viaje, Op. 71 No. Vi. Rumores De La Caleta",
                "track_time": "3:29",
                "track_url": "https://dl.vmusic.ir/2022/02/Jesús Ángel - Viajando con Albéniz (2022)/128k/05) Jesús Ángel - Recuerdos De Viaje, Op. 71 No. Vi. Rumores De La Caleta.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jesus-Angel-Viajando-con-Albeniz-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "dc3342811b"
            },
            {
                "id": 112764,
                "track_name": "12 Piezas Características, Op. 92 No. Xii. Torre Bermeja",
                "track_time": "3:50",
                "track_url": "https://dl.vmusic.ir/2022/02/Jesús Ángel - Viajando con Albéniz (2022)/128k/06) Jesús Ángel - 12 Piezas Características, Op. 92 No. Xii. Torre Bermeja - Arranged By Jesús Ángel.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jesus-Angel-Viajando-con-Albeniz-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "ecfa627af4"
            },
            {
                "id": 112765,
                "track_name": "Mallorca (Barcarola",
                "track_time": "6:28",
                "track_url": "https://dl.vmusic.ir/2022/02/Jesús Ángel - Viajando con Albéniz (2022)/128k/07) Jesús Ángel - Mallorca (Barcarola) Op. 202.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Jesus-Angel-Viajando-con-Albeniz-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "a122cb946b"
            }
        ],
        "length": 1
    },
    {
        "album": {
            "id": "112665",
            "album_name": "Tempus fugit _ Musica manet",
            "album_composer": "Goetz Oestlind",
            "album_genre": "Classical Crossover",
            "album_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
            "album_url": "https://vmusic.ir/album/goetz-oestlind-tempus-fugit-_-musica-manet-2022/"
        },
        "musics": [
            {
                "id": 112668,
                "track_name": "Benevolentia",
                "track_time": "2:02",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/01) Goetz Oestlind - Benevolentia.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "cb7603a530"
            },
            {
                "id": 112669,
                "track_name": "Laetita",
                "track_time": "2:11",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/02) Goetz Oestlind - Laetita.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "8bdaf94228"
            },
            {
                "id": 112670,
                "track_name": "Amabilitas",
                "track_time": "2:27",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/03) Goetz Oestlind - Amabilitas.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "853e2abacf"
            },
            {
                "id": 112671,
                "track_name": "Gratia",
                "track_time": "2:01",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/04) Goetz Oestlind - Gratia.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "63b0b93b9f"
            },
            {
                "id": 112672,
                "track_name": "Amor",
                "track_time": "2:08",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/05) Goetz Oestlind - Amor.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "0a03ce96d8"
            },
            {
                "id": 112673,
                "track_name": "Felicitas",
                "track_time": "2:04",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/06) Goetz Oestlind - Felicitas.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "d4adc72822"
            },
            {
                "id": 112674,
                "track_name": "Tranquillitas",
                "track_time": "1:58",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/07) Goetz Oestlind - Tranquillitas.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "97bf1690fa"
            },
            {
                "id": 112675,
                "track_name": "Benignitas",
                "track_time": "2:22",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/08) Goetz Oestlind - Benignitas.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "43d0036182"
            },
            {
                "id": 112676,
                "track_name": "Amicitia",
                "track_time": "2:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/09) Goetz Oestlind - Amicitia.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "61c511c07a"
            },
            {
                "id": 112677,
                "track_name": "Veritas",
                "track_time": "2:00",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/10) Goetz Oestlind - Veritas.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "7c4e7f251d"
            },
            {
                "id": 112678,
                "track_name": "Formositas",
                "track_time": "2:04",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/11) Goetz Oestlind - Formositas.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "35eb998a87"
            },
            {
                "id": 112679,
                "track_name": "Infinitas",
                "track_time": "2:22",
                "track_url": "https://dl.vmusic.ir/2022/02/Goetz Oestlind - Tempus fugit _ Musica manet (2022)/128k/12) Goetz Oestlind - Infinitas.mp3",
                "track_thumb": "https://vmusic.ir/wp-content/uploads/2022/02/Goetz-Oestlind-Tempus-fugit-_-Musica-manet-2022-225x225.jpg",
                "is_favorited": 0,
                "like_status": "like",
                "nonce": "415f0097a0"
            }
        ],
        "length": 1
    }
]

// console.log(searchInSongs("Song"))
