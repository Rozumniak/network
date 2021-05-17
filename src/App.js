import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>

            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
            <NavbarContainer/>
        </div>

    );

}


export default App;
