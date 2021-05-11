
import { Theme, useTheme, midLevelStyles} from '@smartb/archetypes-ui-themes'
import {Card} from "@smartb/archetypes-ui-components"
import React from 'react'

const useStyles = midLevelStyles<Theme>()({
    root: {
        margin: "20px 10px",
        flexGrow: 1,
        maxWidth: "1200px",
        minWidth: "400px",
        overflow: "hidden",
        boxShadow: theme => theme.shadows[3]
    },
    divider: {
        height: "1px",
        width: "100%",
        background: theme => theme.colors.tertiary,
        left: "0%"
    },
    header: {
        boxSizing: "border-box",
        width: "100%",
        paddingLeft: "30px",
        "& h6" : {
            fontSize: "16px",
            lineHeight: "1.3"
        }
    },
    bodyWithNoPadding: {
        padding: 0,
        boxSizing: "border-box",
        width: "100%",
    }
})

interface PanelProps {
    children?: React.ReactNode
    header?: string
    noPadding?: boolean
    className?: string
    bodyClassName?: string
}

export const Panel = (props: PanelProps) => {
    const { children, header, noPadding = true, bodyClassName, className } = props
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
        <Card className={`${classes.root} ${className ?? ""}`} classes={{dividerBar: classes.divider, header: classes.header, body: noPadding ? `${classes.bodyWithNoPadding} ${bodyClassName ?? ""}` : bodyClassName}} header={header} logo="none">
            {children}
        </Card>
    )
}
