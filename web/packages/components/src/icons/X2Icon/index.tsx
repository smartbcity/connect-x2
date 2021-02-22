import React from 'react'
import { ReactComponent } from './X2.svg'
import { MergeReactElementProps } from '../types'
import { midLevelStyles } from '../../theme'

const useStyles = (firstColor: string, secondColor: string) => midLevelStyles({
  root: {
    "& .X2Icon-2": {
      stroke: secondColor,
      strokeWidth: 20
    },
    "& .X2Icon-X": {
      fill: firstColor
    }
  }
})

interface X2IconBasicProps {
  firstColor?: string
  secondColor?: string
}

type X2IconProps = MergeReactElementProps<'svg', X2IconBasicProps>

export const X2Icon = React.forwardRef(
  (props: X2IconProps, ref: React.Ref<SVGSVGElement>) => {
    const { firstColor = 'black', secondColor = "yellow" } = props
    const classes = useStyles(firstColor, secondColor)()
    return <ReactComponent className={classes.root} ref={ref} {...props} />
  }
)
