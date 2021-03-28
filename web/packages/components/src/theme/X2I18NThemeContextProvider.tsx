import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { ThemeContextProvider } from '@smartb/archetypes-ui-themes'
import { Muitheme, theme } from './Themes'
import { i18n } from 'i18next'

export interface X2I18NThemeContextProviderProps {
  children: React.ReactNode
  i18n: i18n
  loading: JSX.Element
}

export const X2I18NThemeContextProvider = (
  props: X2I18NThemeContextProviderProps
) => {
  const { loading, i18n, children } = props
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={loading}>
        <ThemeContextProvider theme={theme} customMuiTheme={Muitheme}>
          {children}
        </ThemeContextProvider>
      </Suspense>
    </I18nextProvider>
  )
}
