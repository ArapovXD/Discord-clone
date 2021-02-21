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
                <img src="https://cdn.icon-icons.com/icons2/1381/PNG/512/discord_94308.png" alt=""/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default connect()(Login)
