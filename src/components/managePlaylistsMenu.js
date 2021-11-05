//Mixed & General imports
import React from "react"
import "./managePlaylistsMenu.css"
//Ionic imports
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon} from "@ionic/react"
//Ionic icons imports
import { add } from "ionicons/icons"

class ManagePlaylistsMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchPage: props.props.searchPage
        }
    }
    
    AddSongToPlaylist = (index) => {
        let myPlaylists = this.state.searchPage.state.myPlaylists
        myPlaylists[index].songs.push(this.state.searchPage.state.selectedSong)
        this.state.searchPage.setState({myPlaylists: myPlaylists}, () => {
            setTimeout(() => {this.state.searchPage.setState({showManagePlaylistsMenu: false})}, 600)
        })
    }

    render() {
        return (
            <div className="managePlaylistsMenuContainer">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Lied zu Playlist hinzufügen...</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            {this.state.searchPage.state.myPlaylists.map((playlist, index) => {
                                return (
                                    <IonItem key={"playlist-item-key-" + index} button onClick={() => {this.AddSongToPlaylist(index)}}>
                                        <IonLabel>
                                            {playlist.name + " [" + playlist.songs.length + "]"}
                                        </IonLabel>
                                        <IonIcon slot="start" icon={add} />
                                    </IonItem>
                                )
                            })}
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </div>
        )
    }
}

export default ManagePlaylistsMenu