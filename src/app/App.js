import React, { Component } from "react";
import rootRoutes from "./components/web/rootRoutes";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NotificationContainer />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={rootRoutes} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
