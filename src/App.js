import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Portfolio from "./containers/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <header className="App-header">
        <BrowserRouter>
          <Layout>
            <Portfolio />
          </Layout>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
