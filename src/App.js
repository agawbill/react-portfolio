import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./containers/Portfolio/Portfolio";
import About from "./containers/Portfolio/About/About";
import Blog from "./containers/Portfolio/Blog/Blog";
import Projects from "./containers/Portfolio/Projects/Projects";
import Contact from "./containers/Portfolio/Contact/Contact";

function App() {
  return (
    <div>
      <header className="App-header">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Portfolio} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
