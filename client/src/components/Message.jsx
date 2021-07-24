import React from 'react'
import { createUseStyles } from 'react-jss'
import { useThemeContext } from '../context/ThemeContext'
import './Chats/Chatjs.scss'

const Message = ({ message , isAdmin }) => {
    const [theme,,] = useThemeContext()

    const useStyles = createUseStyles({
        message : {
            display: 'block',
            maxWidth: '35rem',
            margin: '.5rem 1rem',
            padding: '.9rem .8rem',
            fontSize: '1.5rem',
            color: theme.currentTheme.message.color,
        },
        admin : {
            alignSelf: 'flex-end',
            textAlign: 'right',
            borderRadius: '10px 10px 0 10px',
            backgroundColor: theme.currentTheme.message.admin
        },
        others : {
            alignSelf: 'flex-start',
            textAlign: 'left',
            borderRadius: '0 10px 10px 10px',
            backgroundColor: theme.currentTheme.message.others,
            color: 'black'
        }
    })

    const classes = useStyles()
    return(
        <p className={`${classes.message} ${isAdmin ? `${classes.admin}` : `${classes.others}`}`}>
           {message} 
        </p>
    )
}

export default Message