var axios = require('axios').default;
const url = require('url');
url.URLSearchParams = URLSearchParams;
const base64 = require('base-64');

var credentials = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
}

export async function authorization_access(){
    const params = new URLSearchParams({ grant_type: 'client_credentials' });
    const authString = 'Basic ' + base64.encode(credentials.clientId + ':' + credentials.clientSecret);

    try {
        const request = await axios.post('https://accounts.spotify.com/api/token', params.toString(), 
        {
            headers: {
                'Authorization': authString
            }
        })

        let response = request.data;
        return response.access_token; // GET ACCESS TOKEN

    } catch (error) {
        return error.response.data;
    }
    
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

// Search tracks whose name, album or artist contains "query"
export function searchSong(query, spotifyApi, token, subPage) {
    spotifyApi.setAccessToken(token);
    let songs = []

    spotifyApi.searchTracks(query)
    .then(function(data) {
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
        
    }, function(err) {
        console.error(err);
    })
}
