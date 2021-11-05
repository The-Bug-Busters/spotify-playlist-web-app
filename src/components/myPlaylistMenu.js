//Mixed & General imports
import React from "react"
import "./myPlaylistsMenu.css"
//Ionic imports
import {IonCard, IonCardHeader, IonToolbar, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon, IonThumbnail, IonImg, IonFabButton} from "@ionic/react"
//Ionic icons imports
import { trash, close, remove } from "ionicons/icons"

class MyPlaylistsMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchPage: props.props.searchPage,
            playlistIndex: props.props.searchPage.state.selectedPlaylistIndex
        }
    }

    RemovePlaylistFromMyPlaylists = () => {
        let myPlaylists = this.state.searchPage.state.myPlaylists
        myPlaylists.splice(this.state.playlistIndex, 1)
        this.state.searchPage.setState({
            myPlaylists: myPlaylists,
            showMyPlaylistMenu: false,
            showMyPlaylistsMenu: true
        })
    }

    CloseMyPlaylistMenu = () => {
        this.state.searchPage.setState({
            showMyPlaylistMenu: false,
            showMyPlaylistsMenu: true
        })
    }

    RemoveSongFromPlaylist = (index) => {
        let myPlaylists = this.state.searchPage.state.myPlaylists
        myPlaylists[this.state.playlistIndex].songs.splice(index, 1)
        this.state.searchPage.setState({myPlaylists: myPlaylists})
    }

    render() {
        return (
            <div className="myPlaylistsMenuContainer">
                {this.state.playlistIndex !== undefined ?
                    <IonCard>
                        <IonCardHeader>
                            <IonToolbar>
                                <IonCardTitle>{this.state.searchPage.state.myPlaylists[this.state.playlistIndex].name}</IonCardTitle>
                                <IonFabButton color="medium" size="small" slot="end" onClick={() => {this.RemovePlaylistFromMyPlaylists()}}>
                                    <IonIcon icon={trash} />
                                </IonFabButton>
                                <IonFabButton color="medium" size="small" slot="end" onClick={() => {this.CloseMyPlaylistMenu()}}>
                                    <IonIcon icon={close} />
                                </IonFabButton>
                            </IonToolbar>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                {this.state.searchPage.state.myPlaylists[this.state.playlistIndex].songs.map((song, index) => {
                                    return (
                                        <IonItem key={"song-item-key-" + index}>
                                            <IonThumbnail slot="start">
                                                <IonImg src={song.cover} />
                                            </IonThumbnail>
                                            <IonLabel>
                                                {"[" + song.interpret + "] - " + song.title}
                                            </IonLabel>
                                            <IonFabButton color="medium" size="small" slot="end" onClick={() => {this.RemoveSongFromPlaylist(index)}}>
                                                <IonIcon icon={remove} />
                                            </IonFabButton>
                                        </IonItem>
                                    )
                                })}
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                :null}
            </div>
        )
    }
}

export default MyPlaylistsMenu