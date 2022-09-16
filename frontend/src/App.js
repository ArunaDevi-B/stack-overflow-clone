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
import { login, logout, selectUser } from './features/userSlice';
import {auth} from "./firebase"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
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

  const PrivateRoute = ({component: Component, ...rest})=>(<Route 
    {...rest} 
    render={(props)=> 
      user ? (
      <Component {...props} />
      ) : (
      <Redirect 
      to = {{
      pathname: '/auth',
      state: {
        from: props.location,
      },
    }}
       />
       )
       }
       />)
    
  ;
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path= {user ? '/' : "/auth"} component = {user ? StackOverFlow : Auth} />
        <PrivateRoute exact path="/add-question" component ={Question} />
        <PrivateRoute exact path="/question" component ={ViewQuestion} />
        {/* <PrivateRoute exact path= "/" component = {StackOverFlow} /> */}
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
