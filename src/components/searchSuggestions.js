//Mixed & General imports
import React from "react"
import "./searchSuggestions.css"
//Ionic imports
import {IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonFabButton, IonIcon} from "@ionic/react"
//Ionic icons imports
import { add } from "ionicons/icons"

class SearchSuggestions extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchPage: props.props.searchPage
        }
    }

    render() {
        return (
            <IonList className="searchSuggestionsContainer">
                {this.state.searchPage.state.foundSongs.map((song, index) => {
                    return (
                        <IonItem key={"song-item-key-" + index}>
                            <IonThumbnail slot="start">
                                <IonImg src={song.cover} />
                            </IonThumbnail>
                            <IonLabel>
                                {"[" + song.interpret + "] - " + song.title + " - " + song.year}
                            </IonLabel>
                            <IonLabel slot="end">
                                {song.duration}
                            </IonLabel>
                            <IonFabButton color="medium" size="small" slot="end" onClick={() => {this.state.searchPage.setState({selectedSong: song, showManagePlaylistsMenu: true})}}>
                                <IonIcon icon={add} />
                            </IonFabButton>
                        </IonItem>
                    )
                })}
            </IonList>
        )
    }
}

export default SearchSuggestions