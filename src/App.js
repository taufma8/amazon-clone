import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
      // if you use return in useEffect, the the result of that will run when the component is unmounted
    return () => {
      //any cleanup operations go here...
      unsubscribe();
    }
  }, []);
  // console.log('user is', user)

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>


          <Route path="/login">
            {/* <Header /> */}
            <Login />
          </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
