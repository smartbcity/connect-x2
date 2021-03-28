
import { Theme, useTheme } from '@smartb/archetypes-ui-themes'
import {Card} from "@smartb/archetypes-ui-components"
import React from 'react'
import { midLevelStyles } from 'utils'

const useStyles = (theme: Theme) => midLevelStyles({
    root: {
        margin: "20px",
        flexGrow: 1,
        maxWidth: "700px",
        minWidth: "300px",
        overflow: "hidden"
    },
    divider: {
        height: "1px",
        width: "100%",
        background: theme.tertiaryColor,
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
    const classes = useStyles(theme)()
    return (
        <Card className={`${classes.root} ${className ?? ""}`} classes={{dividerBar: classes.divider, header: classes.header, body: noPadding ? `${classes.bodyWithNoPadding} ${bodyClassName ?? ""}` : bodyClassName}} header={header} logo="none">
            {children}
        </Card>
    )
}
