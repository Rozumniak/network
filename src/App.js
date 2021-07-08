import React from 'react';
import './App.css';
import ProfileContainer from './Components/Profile/ProfileContainer';
import News from "./Components/News/News";
import {NavLink, Route, withRouter, Switch, Redirect} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader";
import Navbar from "./Components/Navbar/Navbar";
import 'antd/dist/antd.css';
import {Layout, Menu, Button} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    FormOutlined,
    TeamOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import s from "./Components/Navbar/Navbar.module.css";
import {logout} from "./Redux/auth-reducer";
import ProfileStatusWithHooks from "./Components/Profile/MyPosts/ProfileInfo/ProfileStatusWithHooks";


const {Header, Sider, Content} = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
        size: 'large',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    catchAllUnhandledError = () => {
        alert("Some Error");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledError);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledError);
    }

    render() {
        const {size} = this.state;
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FormOutlined/>}>
                            <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TeamOutlined/>}>
                            <NavLink to="/users" activeClassName={s.active}> Пользователи</NavLink>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        <div className="auth-block"> {this.props.isAuth ?
                            <div> {this.props.login} - <Button onClick={this.props.logout}>
                                Logout</Button></div>
                            : <NavLink to={'/login'}>Login</NavLink>}
                        </div>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path='/' exact><Redirect to='/profile'/></Route>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>

        </>


    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth,
    authUserProfile: state.authReducer.authUserProfile
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, logout}))(App);