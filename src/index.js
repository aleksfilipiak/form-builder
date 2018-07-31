import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./components/app"

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.querySelector(".container")
);