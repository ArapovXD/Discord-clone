import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import SidebarChannel from './SidebarChannel';

//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

//Redux
import {connect} from 'react-redux'
import { Avatar } from '@material-ui/core';
import db, { auth } from './config';


function Sidebar({dispatch, user, appData}) {
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        })
    }) 

    const handleAddChannel = () =>{
        const channelName = prompt("Enter a new channel name")
        if (channelName) {
            db.collection('channels').add({
                channelName: channelName
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h3>feat. ArapovXD</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar-channels">
                <div className="sidebar-channels-header">
                    <div className="sidebar-header">
                        <ExpandMoreIcon/>
                        <h4>Text channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar-addChannel"/>
                </div>

                <div className="sidebar-channelsList">
                    {channels.map(({id, channel}) => (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                    ))}
                </div>
            </div>
            <div className="sidebar-voice">
                <SignalCellularAltIcon
                    className="sidebar-voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar-voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar-voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar-profile">
                <Avatar onClick={() => auth.signOut()} src={user.user.photo}/>
                <div className="sidebar-profileInfo">
                    <h3>@{user.user.displayName}</h3>
                    <p>#{user.user.uid.substring(0, 5)}</p>
                </div>

                <div className="sidebar-profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    user: state.user,
    appData: state.app
})

export default connect(mapStateToProps)(Sidebar)
