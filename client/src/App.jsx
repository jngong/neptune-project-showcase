import React from "react";
import "./App.css";
import { Header } from "./components/shared/Header";
import { Nav } from "./components/shared/Nav";
import { Footer } from "./components/shared/Footer";
import { Main } from "./components/shared/Main";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
