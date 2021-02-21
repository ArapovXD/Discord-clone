import React from 'react'
import "./SidebarChannel.css"
import {connect} from "react-redux"

function SidebarChannel({dispatch, user, appData, id, channelName}) {
    return (
        <div onClick={() => dispatch({type: "SET_CHANNEL_INFO", payload: {id: id, name: channelName}})} className="sidebarChannel">
            <h4><span className="sidebarChannel-hash">#</span>{channelName}</h4>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    appData: state.app
})

export default connect(mapStateToProps)(SidebarChannel)
