import React from 'react'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Join from './components/Join/Join'
import Room from './components/Room/Room'
import './App.scss'

const App = () => {
    return(
       <Router>
           <Switch>
               <Route exact path='/' component={Join} />
               <Route exact path='/room' component={Room} />
           </Switch>
       </Router>
    )
}

export default App