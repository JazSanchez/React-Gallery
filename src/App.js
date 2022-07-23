import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import NotFound from "./components/NotFound";
import apiKey from "./components/config";
import PhotoContainer from "./components/PhotoContainer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      outerspace: [],
      ocean: [],
      jungle: [],
    };
  }

  componentDidMount() {
    this.performSearch();
    this.performSearch("outerspace");
    this.performSearch("ocean");
    this.performSearch("jungle");
  }

  performSearch = (query = "outerspace") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "outerspace") {
          this.setState({
            outerspace: response.data.photos.photo,
          });
        } else if (query === "ocean") {
          this.setState({
            ocean: response.data.photos.photo,
          });
        } else if (query === "jungle") {
          this.setState({
            jungle: response.data.photos.photo,
          });
        } else {
          this.setState({
            photo: response.data.photos.photo,
          });
        }
      })

      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <div className="photo-container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <PhotoContainer data={this.state.photos} />}
              />
              <Route
                path="/outerspace"
                render={() => <PhotoContainer data={this.state.outerspace} />}
              />
              <Route
                path="/ocean"
                render={() => <PhotoContainer data={this.state.ocean} />}
              />
              <Route
                path="/jungle"
                render={() => <PhotoContainer data={this.state.jungle} />}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
