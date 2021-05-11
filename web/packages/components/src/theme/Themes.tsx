import { createMuiTheme } from '@material-ui/core'
import { Theme as AruiTheme } from '@smartb/archetypes-ui-themes'
import { StyleProps } from '@smartb/archetypes-ui-layout'


export const appLayoutStyleProps: StyleProps = {
  appBarHeight: 55,
  detailDrawerWidth: 180,
  menuWidth: 180
}

export const theme: AruiTheme = {
  name: "X2",
  colors: {
    primary: '#FEC519',
    secondary: '#353945',
    tertiary: '#F2F4F5',
    error: "#E44258",
    success: "#00CA72",
    warning: "#FF9900",
    info: "#3C78D8"
  },
  shadows: [
    '0px 0px 0px 0px rgba(0,0,0,0)',
    '0px 3px 10px 0 rgba(0,0,0,0.1)',
    '0px 3.75px 12.5px 0px rgba(0,0,0,0.12)',
    '0px 4.5px 15px 0px rgba(0,0,0,0.14)',
    '0px 5.25px 17.5px 0px rgba(0,0,0,0.16)',
    '0px 6px 20px 0px rgba(0,0,0,0.18)',
    '0px 6.75px 22.5px 0px rgba(0,0,0,0.2)',
    '0px 7.5px 25px 0px rgba(0,0,0,0.22)',
    '0px 8.25px 27.5px 0px rgba(0,0,0,0.24)',
    '0px 9px 30px 0px rgba(0,0,0,0.26)',
    '0px 9.75px 32.5px 0px rgba(0,0,0,0.28)',
    '0px 10.5px 35px 0px rgba(0,0,0,0.3)',
    '0px 11.25px 37.5px 0px rgba(0,0,0,0.32)'
  ]
}

export const Muitheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.primary
    },
    secondary: {
      main: theme.colors.secondary
    },
    text: {
      primary: "#353945",
      secondary: "rgba(53, 57, 69, 0.7)"
    }
  },
  typography: {
    fontFamily: "'Montserrat', Arial",
  }
})


