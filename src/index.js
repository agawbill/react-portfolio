import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import blogs from "./store/reducers/blogs";
import projects from "./store/reducers/projects";
import content from "./store/reducers/content";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  projects,
  blogs,
  content
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
