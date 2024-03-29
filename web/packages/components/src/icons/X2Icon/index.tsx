import React, { useMemo } from 'react'
import { ReactComponent } from './X2.svg'
import { MergeReactElementProps } from '../types'
import { makeG2STyles, useTheme } from '@smartb/g2-themes'
import clsx from 'clsx'

const useStyles = makeG2STyles<{firstColor: string, secondColor: string}>()((_, props) => ({
  root: {
    "& .X2Icon-2": {
      stroke: props.secondColor,
      strokeWidth: 20
    },
    "& .X2Icon-X": {
      fill: props.firstColor
    }
  }
}))

interface X2IconBasicProps {
  firstColor?: string
  secondColor?: string
}

type X2IconProps = MergeReactElementProps<'svg', X2IconBasicProps>

export const X2Icon = React.forwardRef(
  (props: X2IconProps, ref: React.Ref<SVGSVGElement>) => {
    const theme = useTheme()
    const { firstColor = theme.colors.secondary, secondColor = theme.colors.primary, className, ...other } = props
    const stylesColors = useMemo(() => ({firstColor: firstColor, secondColor: secondColor}), [firstColor, secondColor])
    const { classes } = useStyles(stylesColors)
    return <ReactComponent className={clsx(classes.root, className)} ref={ref} {...other} />
  }
)
