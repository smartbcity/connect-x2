import React from 'react'
import { ReactComponent } from './user-icon.svg'
import { MergeReactElementProps } from '../types'
import { useTheme } from '@smartb/g2-themes'

interface UserBasicProps {
  color?: string
}

type UserProps = MergeReactElementProps<'svg', UserBasicProps>

export const User = React.forwardRef(
  (props: UserProps, ref: React.Ref<SVGSVGElement>) => {
    const theme = useTheme()
    const { color = theme.colors.secondary, ...other } = props
    return <ReactComponent stroke={color} ref={ref} {...other} />
  }
)
