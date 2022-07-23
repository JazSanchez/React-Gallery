import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import NotFound from "./components/NotFound";
import apiKey from "./config";
import PhotoContainer from "./components/PhotoContainer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      dog: [],
      rabbit: [],
      koala: [],
    };
  }

  componentDidMount() {
    this.performSearch();
    this.performSearch("dog");
    this.performSearch("rabbit");
    this.performSearch("koala");
  }

  performSearch = (query = "cat") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "dog") {
          this.setState({
            dog: response.data.photos.photo,
          });
        } else if (query === "rabbit") {
          this.setState({
            rabbit: response.data.photos.photo,
          });
        } else if (query === "koala") {
          this.setState({
            koala: response.data.photos.photo,
          });
        } else {
          this.setState({
            photos: response.data.photos.photo,
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
              path="/dog"
              render={() => <PhotoContainer data={this.state.dog} />}
            />
            <Route
              path="/rabbit"
              render={() => <PhotoContainer data={this.state.rabbit} />}
            />
            <Route
              path="/koala"
              render={() => <PhotoContainer data={this.state.koala} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
