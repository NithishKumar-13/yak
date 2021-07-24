import React , { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../utilities.scss'
import './Form.scss'

const Form = ({className}) => {
    const [user,setUser] = useState({
      userName: '',
      room: ''
    })
    const [disabled,setDisabled] = useState(true)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push({
            pathname : '/room',
            search : `?name=${user.userName}&room=${user.room}`
        })
    }

    const handleChange = evt => {
      const { name , value } = evt.target
      setUser(prevSt => ({
        ...prevSt,
        [name] : value
      }))
      const { userName , room } = user
      if(userName.length >=3 && room.length >=3 ) {
        setDisabled(false)
      }else {
        setDisabled(true)
      }

    }

    return (
      <div className={className}>
        <div className="login-page">
          <div className="form">
              <h1>Yak</h1>
            <form onSubmit={handleSubmit} className="login-form">
              <input type="text" name="userName" value={user.userName} onChange={handleChange} placeholder="Enter name" />
              <input type="text" name="room" value={user.room} onChange={handleChange} placeholder="Enter Room" />
              <button disabled={disabled} type='submit'>Join</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Form