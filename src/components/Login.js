import React from 'react'
import './Login.css'
import {connect} from "react-redux"
import {Button} from "@material-ui/core"
import {auth, provider} from './config'

function Login({dispatch}) {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/discord-c81fd.appspot.com/o/logo.png?alt=media&token=ecf2c173-ea98-4d63-84e9-4403ed9fc01c" alt=""/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default connect()(Login)
