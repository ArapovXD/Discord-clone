import React, {useState, useEffect} from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import {connect} from 'react-redux'
import firebase from 'firebase'

//Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import db from './config'


function Chat({dispatch, appData, user}) {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (appData.channelId){
            db.collection('channels').doc(appData.channelId).collection('messages').orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => {
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                })
        }
    }, [appData.channelId])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels').doc(appData.channelId).collection('messages')
            .add({
                message: input,
                user: user.user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        
        setInput('');
    }

    return (
        <div className="chat">
            <ChatHeader channelName={appData.channelName}/>
            <div className="chat-massages">
                {messages.map((message) => (
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user} 
                    />
                ))}
            </div>
            <div className="chat-input">
                <AddCircleIcon />
                <form>
                    <input disabled={!appData.channelId} value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${appData.channelName}`}/>
                    <button onClick={sendMessage} className="chat-inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat-inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    appData: state.app,
    user: state.user
})

export default connect(mapStateToProps)(Chat)
