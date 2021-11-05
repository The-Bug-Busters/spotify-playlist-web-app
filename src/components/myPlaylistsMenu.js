//Mixed & General imports
import React from "react"
import "./myPlaylistsMenu.css"
//Ionic imports
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon, IonFooter, IonInput} from "@ionic/react"
//Ionic icons imports
import { list } from "ionicons/icons"

class MyPlaylistsMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchPage: props.props.searchPage,
            newPlaylistName: ""
        }
    }

    ShowPlaylist = (index) => {
        this.state.searchPage.setState({
            selectedPlaylistIndex: index,
            showMyPlaylistsMenu: false
        }, () => {
            this.state.searchPage.setState({showMyPlaylistMenu: true})
        })
    }

    AddNewPlaylist = () => {
        let myPlaylists = this.state.searchPage.state.myPlaylists
        let newPlaylist = {name: this.state.newPlaylistName, songs: []}
        myPlaylists.push(newPlaylist)
        this.state.searchPage.setState({myPlaylists: myPlaylists}, () => {
            this.setState({newPlaylistName: ""})
        })
    }

    NewPlaylistNameChanged = (value) => {
        this.setState({newPlaylistName: value})
    }

    PressedKeyInNewPlaylistInput = (key) => {
        if (key === "Enter") {
            this.AddNewPlaylist()
        } else if (key === "Escape") {
            this.ClearNewPlaylistInput()
        }
    }

    ClearNewPlaylistInput = () => {
        this.setState({newPlaylistName: ""})
    }

    render() {
        return (
            <div className="myPlaylistsMenuContainer">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Deine Playlists</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            {this.state.searchPage.state.myPlaylists.map((playlist, index) => {
                                return (
                                    <IonItem key={"playlist-item-key-" + index} button onClick={() => {this.ShowPlaylist(index)}}>
                                        <IonLabel>
                                            {playlist.name + " [" + playlist.songs.length + "]"}
                                        </IonLabel>
                                        <IonIcon slot="start" icon={list} />
                                    </IonItem>
                                )
                            })}
                        </IonList>
                    </IonCardContent>
                    <IonFooter>
                        <IonInput 
                            clearInput
                            placeholder="Playlist erstellen..."
                            value={this.state.newPlaylistName} 
                            onIonChange={(event) => this.NewPlaylistNameChanged(event.detail.value)} 
                            onKeyDown={(event) => this.PressedKeyInNewPlaylistInput(event.key)}
                            >
                        </IonInput>
                    </IonFooter>
                </IonCard>
            </div>
        )
    }
}

export default MyPlaylistsMenu