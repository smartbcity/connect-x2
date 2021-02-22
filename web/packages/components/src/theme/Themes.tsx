import { createMuiTheme, makeStyles } from '@material-ui/core'
import { Theme, themeContext } from '@smartb/archetypes-ui-components'
import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme'
import { Styles } from '@material-ui/core/styles/withStyles'

export const X2ThemeContext = themeContext

export const appLayoutStyleProps = {
  appBarHeight: 60,
  detailDrawerWidth: 150,
  menuWidth: 150
}

export const theme: Theme = {
  name: "X2",
  hex: {
    primaryColor: '#E3AC41',
    secondaryColor: '#f1daa8',
    tertiaryColor: '#F2F4F5',
  },
  rgb: {
    primaryColor: '227, 172, 65',
    secondaryColor: '241, 218, 168',
    tertiaryColor: '242, 244, 245',
  },
  shadows: [
    '0 0px 0px 0 rgba(0,0,0,0)',
    '0px 9px 18px 0px rgba(0,0,0,0.05)',
    '0px 11.25px 22.5px 0px rgba(0,0,0,0.07)',
    '0px 13.5px 27px 0px rgba(0,0,0,0.09)',
    '0px 15.75px 31.5px 0px rgba(0,0,0,0.11)',
    '0px 18px 36px 0px rgba(0,0,0,0.13)',
    '0px 20.25px 40.5px 0px rgba(0,0,0,0.15)',
    '0px 22.5px 45px 0px rgba(0,0,0,0.17)',
    '0px 24.75px 49.5px 0px rgba(0,0,0,0.19)',
    '0px 27px 54px 0px rgba(0,0,0,0.21)',
    '0px 29.25px 58.5px 0px rgba(0,0,0,0.23)',
    '0px 31.5px 63px 0px rgba(0,0,0,0.25)',
    '0px 33.75px 67.5px 0px rgba(0,0,0,0.27)'
  ]
}

export const Muitheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.hex.primaryColor
    },
    secondary: {
      main: theme.hex.secondaryColor
    }
  }
})

export function midLevelStyles<
  Theme = MuiTheme,
  Props extends object = {},
  ClassKey extends string = string
>(styles: Styles<Theme, Props, ClassKey>) {
  return makeStyles(styles, { index: 1 })
}

export function highLevelStyles<
  Theme = MuiTheme,
  Props extends object = {},
  ClassKey extends string = string
>(styles: Styles<Theme, Props, ClassKey>) {
  return makeStyles(styles, { index: 2 })
}

