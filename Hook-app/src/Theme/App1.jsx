import React from 'react'
import ThemeButton from './ThemeButton'
import ThemeProvider,{ThemeContext} from './ThemeProvider'

function App1() {
  return (
    <div>
      <ThemeProvider>
        <ThemeButton/>
      </ThemeProvider>
    </div>
  )
}

export default App1