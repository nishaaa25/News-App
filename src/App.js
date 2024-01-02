import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Categories from "./components/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Categories />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="home" category="general" />}
            />

            <Route
              exact
              path="/technology"
              element={<News key="technology" category="technology" />}
            />
            <Route
              exact
              path="/general"
              element={<News key="world" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" category="business" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" category="sports" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News key="entertainment" category="entertainment" />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" category="science" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
