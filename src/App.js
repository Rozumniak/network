import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Users from "./Components/Users/Users";


const App = (props) => {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs messages={props.state.messagesPage.messages}
                                                                  dialogs={props.state.messagesPage.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <Users/>}/>

                </div>
            </div>

    );

}


export default App;
