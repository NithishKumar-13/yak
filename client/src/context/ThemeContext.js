import React , { useState , createContext , useContext } from 'react'
import ThemePalette from '../theme.json'
const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState({currentTheme : ThemePalette[0]})
    const [themes,] = useState(ThemePalette)

    return (
        <ThemeContext.Provider value={[theme,setTheme,themes]}>
            {children}
        </ThemeContext.Provider>
    )
}

const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if(context === undefined) {
        throw new Error('Wrap your component with ThemeProvider')
    }
    return context
}

export { ThemeProvider , useThemeContext }