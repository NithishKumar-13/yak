import React , { useState , useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Chats from '../Chats/Chats'
import { generateRandomPalette } from '../../Helper/Helper'
import { useThemeContext } from '../../context/ThemeContext'
import './Room.scss'
import '../Chats/Chats.scss'

let socket

const Room = ({ location }) => {
    const [username,setUsername] = useState('')
    const [room,setRoom] = useState('')
    const [message,setMessage] = useState('')
    const [messages,setMessages] = useState([])
    const [theme,,] = useThemeContext()

    useEffect(() => {
        socket = io('http://localhost:8080', {
            transports: ["websocket", "polling", "flashsocket"],
        })

        const { name , room } = queryString.parse(location.search)
        setUsername(name)
        setRoom(room)

        socket.emit('join-room', { name : username , room })

        socket.on('send-room-message', message => {
            const incomingMessage = {...message , isAdmin : message.senderId === socket.id , palette : generateRandomPalette() }
            setMessages(messages => [...messages , incomingMessage])
        })

        return () => {
            socket.disconnect()
            socket.off()
        }

    },[location.search, username])
    
    const sendMessage = () => {
        if(message) {
            socket.emit('send-message', { message , senderId : socket.id , username })
        }
    }

    return (
        <div style={{background: theme.currentTheme.displayColor}} className="room">
         <div className="room__container">
             <Chats name={username} room={room} message={message} setMessage={setMessage} messages={messages} setMessages={setMessages} sendMessage={sendMessage} />
         </div>
        </div>
    )
}

export default Room