import React from 'react'
import { ReactComponent } from './SSM-icon.svg'
import { MergeReactElementProps } from '../types'
import { useTheme } from '@smartb/archetypes-ui-themes'

interface SSMIconBasicProps {
  color?: string
}

type SSMIconProps = MergeReactElementProps<'svg', SSMIconBasicProps>

export const SSMIcon = React.forwardRef(
  (props: SSMIconProps, ref: React.Ref<SVGSVGElement>) => {
    const theme = useTheme()
    const { color = theme.colors.secondary, ...other } = props
    return <ReactComponent fill={color} ref={ref} {...other} />
  }
)
