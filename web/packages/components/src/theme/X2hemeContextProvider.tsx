import React from 'react'
import { ThemeContextProvider } from '@smartb/archetypes-ui-components'
import { Muitheme, theme } from './Themes'

export interface X2ThemeContextProviderProps {
  children: React.ReactNode
}

export const X2ThemeContextProvider = (props: X2ThemeContextProviderProps) => {
  return (
    <ThemeContextProvider theme={theme} customMuiTheme={Muitheme}>
      {props.children}
    </ThemeContextProvider>
  )
}
