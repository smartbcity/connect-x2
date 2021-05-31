
import { Theme, useTheme, midLevelStyles} from '@smartb/archetypes-ui-themes'
import {Card} from "@smartb/archetypes-ui-components"
import React from 'react'
import { EmbedCodeViewer } from '../EmbedCodeViewer'

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
            fontSize: "17px",
            lineHeight: "1.3"
        }
    },
    bodyWithNoPadding: {
        padding: 0,
        boxSizing: "border-box",
        width: "100%",
    },
    body: {
        postion: "relative"
    },
    embedViewer: {
        position: "absolute",
        color:"white",
        top: "3px",
        zIndex: 1,
        right: "10px"
    }
})

interface PanelProps {
    children?: React.ReactNode
    header?: string
    noPadding?: boolean
    className?: string
    bodyClassName?: string
    embedUrl?: string
}

export const Panel = (props: PanelProps) => {
    const { children, header, noPadding = true, bodyClassName, className, embedUrl } = props
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
        <Card className={`${classes.root} ${className ?? ""}`} classes={{dividerBar: classes.divider, header: classes.header, body: noPadding ? `${classes.bodyWithNoPadding} ${bodyClassName ?? ""}` : `${classes.body} ${bodyClassName ?? ""}`}} header={header} logo="none">
            {embedUrl && <EmbedCodeViewer className={classes.embedViewer} embedUrl={embedUrl}/>}
            {children}
        </Card>
    )
}
