const axios = require('axios').default;

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

// Search tracks whose name, album or artist contains "query"
export async function searchSong(query, subPage) {

    const request = await axios.get('https://dhbw-api.yaman.pro/searchsong/' + query)

    let data = request.data;

    let songs = []

    let song = {id: "", cover: "", interpret: "", title: "", year: "", duration: ""}

    if (data.body.tracks.items[0]) {
        for(let i = 0; i < 10; i++) { //Loop only the first 10 song suggestions
            song.id = data.body.tracks.items[i].id
            song.cover = data.body.tracks.items[i].album.images[2].url //height, width 64 -> index 2
            song.interpret = data.body.tracks.items[i].album.artists[0].name
            song.title = data.body.tracks.items[i].name
            song.duration = millisToMinutesAndSeconds(data.body.tracks.items[i].duration_ms)
            song.year = data.body.tracks.items[i].album.release_date.substr(0, 4)

            songs.push(song)
            song = {id: "", cover: "", interpret: "", title: "", year: "", duration: ""}
        }

        subPage.setState({foundSongs: songs})
    } else {
        alert("Leider konnte kein Lied mit diesem Namen gefunden werden")
    }
        

}
