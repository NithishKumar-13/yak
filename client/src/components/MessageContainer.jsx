import React from 'react'
import MessageHolder from './MessageHolder'
import './Chats/Chats.scss'

const MessageContainer = ({ messages , name }) => {
    return(
        <div className='message-container'>
           {messages.map(msg => {
               return <MessageHolder message={msg} name={name} />
           })}
        </div>
    )
}

export default MessageContainer