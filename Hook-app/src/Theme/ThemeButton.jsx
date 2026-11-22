import React, { useContext } from 'react'
import {ThemeContext} from './ThemeProvider'

function ThemeButton() {
    const{theme,toggleTheme}=useContext(ThemeContext);
  return (
    <div style={{height:"100%", backgroundColor: theme==="light"?'white':'black',
        color: theme==="light"?'black':'white', textAlign:"center",padding:"100px"
    }}>
        <h1>Current Theme :{theme} </h1>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeButton