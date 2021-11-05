//Mixed & General imports
import React from "react"
import "./searchBar.css"
//Ionic imports
import {IonSearchbar} from "@ionic/react"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchPage: props.props.searchPage,
            searchBarInput: ""
        }
    }

    SearchBarInputChanged = (input) => {
        this.setState({searchBarInput: input}, () => {
            setTimeout(function() {this.ExecuteSearch()}.bind(this), 600)
        })
    }

    PressedKeyInSearchBar = (key) => {
        if (key === "Enter") {
            this.ExecuteSearch()
        } else if (key === "Escape") {
            this.ClearSearchBarInput()
            this.ClearSearchSuggestions()
            this.HideManagePlaylistsMenu()
        }
    }

    ExecuteSearch = () => {
        let searchBarInput = this.state.searchBarInput

        if (searchBarInput !== "") {
            this.state.searchPage.SearchSpotifySongs(searchBarInput)
        } else {
            this.ClearSearchSuggestions()
            this.HideManagePlaylistsMenu()
        }
    }

    ClearSearchBarInput = () => {
        this.setState({searchBarInput: ""})
    }

    ClearSearchSuggestions = () => {
        this.state.searchPage.setState({foundSongs: []})
    }

    HideManagePlaylistsMenu = () => {
        this.state.searchPage.setState({showManagePlaylistsMenu: false})
    }

    render() {
        return (
            <div className="searchBarContainer">
                <IonSearchbar
                    className="ion-searchbar"
                    value={this.state.searchBarInput}
                    onIonChange={(event) => this.SearchBarInputChanged(event.detail.value)}
                    onKeyDown={(event) => this.PressedKeyInSearchBar(event.key)}
                ></IonSearchbar>
            </div>
        )
    }
}

export default SearchBar