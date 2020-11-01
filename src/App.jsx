import React, { useState, useMemo } from 'react'
import cn from 'classnames'
import Router from 'router'
import ThemeContext from 'context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')
  const providerValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((theme) => (theme === 'light' ? 'dark' : 'light')),
    }),
    [theme],
  )

  return (
    <div className={cn('theme', `theme_${theme}`)}>
      <ThemeContext.Provider value={providerValue}>
        <Router />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
