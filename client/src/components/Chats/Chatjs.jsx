import React from 'react'
import RoomName from '../RoomName'
import MessageContainer from '../MessageContainer'
import Input from '../Input'
import './Chats.scss'

const Chats = ({ className , name,  room , message , setMessage , messages , setMessages, sendMessage }) => {
    const classes = `${className} chats`

    return (
        <div className={classes}>
            <RoomName room={room} />
            <MessageContainer messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    )
}

export default Chats