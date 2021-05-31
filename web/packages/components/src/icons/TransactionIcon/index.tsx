import React from 'react'
import { ReactComponent } from './transaction-icon.svg'
import { MergeReactElementProps } from '../types'
import { useTheme } from '@smartb/archetypes-ui-themes'

interface TransactionIconBasicProps {
  color?: string
}

type TransactionIconProps = MergeReactElementProps<'svg', TransactionIconBasicProps>

export const TransactionIcon = React.forwardRef(
  (props: TransactionIconProps, ref: React.Ref<SVGSVGElement>) => {
    const theme = useTheme()
    const { color = theme.colors.secondary, ...other } = props
    return <ReactComponent fill={color} ref={ref} {...other} />
  }
)
