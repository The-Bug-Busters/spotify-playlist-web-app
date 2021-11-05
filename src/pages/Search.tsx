//Mixed & General imports
import React from "react"
import SpotifyWebApi from "spotify-web-api-node"
//Ionic imports
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
//Own components
import SearchBar from "../components/searchBar"
import MyPlaylistsMenu from "../components/myPlaylistsMenu"
import MyPlaylistMenu from "../components/myPlaylistMenu"
import SearchSuggestions from "../components/searchSuggestions"
import ManagePlaylistsMenu from "../components/managePlaylistsMenu"
//Own lib functions
import { authorization_access, searchSong } from "../lib/spotify"

var credentials = {
    clientId: '0cef777950f24f19b04212a35ac9d143',
    clientSecret: '9bd5703a19af4a61b9d81301d4289ea6'
}
let spotifyApi = new SpotifyWebApi(credentials);

class Search extends React.Component<{},any> {
    constructor(props: any) {
        super(props)

        this.state = {
            showMyPlaylistsMenu: true,
            myPlaylists: [
                {name: "Meine erste Playlist", songs: [
                    {id: "4cOdK2wGLETKBW3PvgPWqT", cover: "https://i.scdn.co/image/ab67616d000048515755e164993798e0c9ef7d7a", interpret: "Rick Astley", title: "Never Gonna Give You Up", year: "1987", duration: "3:34"}
                ]}
            ],
            foundSongs: [], //Elements of type {id: "", cover: "", interpret: "", title: "", year: "", duration: ""}
            selectedSong: {},
            showManagePlaylistsMenu: false,
            selectedPlaylistIndex: 0,
            showMyPlaylistMenu: false
        }
    }

    SearchSpotifySongs = async (searchBarInput: String) => {
        let token = await authorization_access()
        searchSong(searchBarInput, spotifyApi, token, this) //Sets state "foundSongs" after search completed
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Verwaltung von Spotify Playlists</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Verwaltung von Spotify Playlists</IonTitle>
                    </IonToolbar>
                    </IonHeader>
                    <SearchBar props={{searchPage: this}} />
                    {this.state.showMyPlaylistsMenu ? 
                        <MyPlaylistsMenu props={{searchPage: this}} />
                    :null}
                    {this.state.showMyPlaylistMenu ? 
                        <MyPlaylistMenu props={{searchPage: this}} />
                    :null}
                    <SearchSuggestions props={{searchPage: this}} />
                    {this.state.showManagePlaylistsMenu ? 
                        <ManagePlaylistsMenu props={{searchPage: this}} />
                    :null}
                </IonContent>
            </IonPage>
        )
    }
}

export default Search