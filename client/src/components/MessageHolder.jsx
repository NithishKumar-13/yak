import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Message from './Message'
import { getInitials } from '../Helper/Helper'
import './Chats/Chats.scss'

const MessageHolder = ({ message , name }) => {
    
    return(
       <div className={`message-holder ${message.isAdmin ? 'message-holder--admin' : 'message-holder--others'}`}>
           <Avatar style={message.palette}>{getInitials(name)}</Avatar>
           <Message message={message.message} isAdmin={message.isAdmin} />
       </div>
    )
}

export default MessageHolder