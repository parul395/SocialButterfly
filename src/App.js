import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./components/Stateprovider";
function App() {
  const [{ user }, dispapatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="App">
      <Router>
        {/* User Authentication */}
        {!user ? (
          <Login />
        ) : (
          <>
            {/* Header */}
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />{" "}
                </Route>
                <Route path="/">
                  <h1>Welcome To Social Butterfly</h1>
                </Route>
              </Switch>
              {/* React - Router -> Chat Screen  to switch without refresh*/}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
