import React from 'react'
import { ReactComponent } from './channel-icon.svg'
import { MergeReactElementProps } from '../types'
import { useTheme } from '@smartb/archetypes-ui-themes'

interface ChannelBasicProps {
  color?: string
}

type ChannelProps = MergeReactElementProps<'svg', ChannelBasicProps>

export const Channel = React.forwardRef(
  (props: ChannelProps, ref: React.Ref<SVGSVGElement>) => {
    const theme = useTheme()
    const { color = theme.colors.secondary, ...other } = props
    return <ReactComponent fill={color} ref={ref} {...other} />
  }
)
