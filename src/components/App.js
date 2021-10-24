import React, { Component } from "react";
import SearchBar from "./SearchBar";
import UnSplash from "../Api/UnSplash";
import ImageList from "./ImageList";
export default class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (trim) => {
    const response = await UnSplash.get("/search/photos", {
      params: { query: trim },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </>
    );
  }
}
