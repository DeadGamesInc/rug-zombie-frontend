import { useContext } from 'react'
import { useTheme as useStyledTheme } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'

const useTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const theme = useStyledTheme()
  return { isDark, toggleTheme, theme }
}

export default useTheme
