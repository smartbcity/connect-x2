import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme'
import { Styles } from '@material-ui/core/styles/withStyles'
import { makeStyles } from '@material-ui/core'

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
