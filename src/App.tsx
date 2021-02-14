import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = (props) => (
  <ThemeProvider theme={theme}>{/* application elements */}</ThemeProvider>
)

export default App