
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import {connect} from 'react-redux'
import Login from './components/Login';
import { auth } from './components/config';
import {useEffect} from 'react'

function App({dispatch, user, appData}) {

  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if (authUser){
          console.log(authUser)
          dispatch({type: "LOGIN", payload: {uid: authUser.uid, photo: authUser.photoURL, email: authUser.email, displayName: authUser.displayName}})
      } else{
          dispatch({type: "LOGOUT"})
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {user.user? (
        <>
          <Sidebar/>
          <Chat/>
        </>
      ) : (
        <Login/>
      )}
      
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  appData: state.app
})

export default connect(mapStateToProps)(App);
