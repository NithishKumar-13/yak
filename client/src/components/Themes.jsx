import React from 'react'
import themes from '../theme.json'

const Themes = ({className}) => {
    return(
        <div className={className}>
            {themes.map(theme => {
                return (
                    <div style={{backgroundColor : theme.displayColor , height : '2.5rem', width:'2.5rem', borderRadius:'50%'}}>
                    </div>
                )
            })}
        </div>
    )
}

export default Themes