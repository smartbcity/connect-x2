import React from 'react'
import { ThemeContextProvider } from '@smartb/g2-themes'
import { theme } from './Themes'

export interface X2ThemeContextProviderProps {
  children: React.ReactNode
}

export const X2ThemeContextProvider = (props: X2ThemeContextProviderProps) => {
  return (
    <ThemeContextProvider theme={theme} >
      {props.children}
    </ThemeContextProvider>
  )
}
