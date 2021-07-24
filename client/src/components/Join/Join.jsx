import React from 'react'
import Avatars from '../Avatars'
import Form from '../Form/Form'
import './Join.scss'

const Join = () => {
    return(
        <div className='join'>
            <Avatars className='join__avatars' />
            <Form className='join__form' />
        </div>
    )
}

export default Join