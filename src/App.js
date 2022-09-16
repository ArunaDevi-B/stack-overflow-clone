import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import StackOverFlow from "./Components/StackOverFlow";
import Question from "./Components/Add-Question/Question";
import ViewQuestion from "./Components/ViewQuestion";
import Auth from "./Components/Auth"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import {auth} from "./firebase"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatcj(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          diplayName: authUser.displayName,
          email: authUser.email
        }))
      } else{
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/auth" component = {Auth} />
        <Route exact path="/add-question" component ={Question} />
        <Route exact path="/question" component ={ViewQuestion} />
        <Route exact path= "/" component = {StackOverFlow} />
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
