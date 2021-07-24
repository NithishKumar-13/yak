import React , { useState , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../../utilities.scss'
import './Form.scss'

const Form = ({className}) => {
    const [name,setName] = useState('')
    const [room,setRoom] = useState('')
    const [disabled,setDisabled] = useState(true)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push({
            pathname : '/room',
            search : `?name=${name}&room=${room}`
        })
    }

    useEffect(() => {
      if(name.length >=4 && room.length>=4) {
        setDisabled(false)
      }
    },[room,name])

    return (
      <div className={className}>
        <div className="login-page">
          <div className="form">
              <h1>Yak</h1>
            <form onSubmit={handleSubmit} className="login-form">
              <input type="text" value={name} onChange={evt => setName(evt.target.value)} placeholder="Enter name" />
              <input type="text" value={room} onChange={evt => setRoom(evt.target.value)} placeholder="Enter Room" />
              <button disabled={disabled} type='submit'>Join</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Form