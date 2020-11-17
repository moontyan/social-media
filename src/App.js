import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import DialogsPageContainer from './components/DialogsPage/DialogsPageContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <div className="App">
        <HeaderContainer />
        <section className="main-wrapper">
          <Nav />
          <div className="content-page">
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsPageContainer />} />
            <Route path='/users' render={() => <FindUsersContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
          </div>
        </section>
      </div>

    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App); 
