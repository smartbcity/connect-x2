
import { Card, Theme, useTheme } from '@smartb/archetypes-ui-components'
import React from 'react'
import { midLevelStyles } from '../../theme'

const useStyles = (theme: Theme) => midLevelStyles({
    root: {
        margin: "20px",
        flexGrow: 1,
        maxWidth: "700px",
        minWidth: "300px"
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
    }
})

interface PanelProps {
    children?: React.ReactNode
    header?: string
}

export const Panel = (props: PanelProps) => {
    const { children, header } = props
    const theme = useTheme()
    const classes = useStyles(theme)()
    return (
        <Card className={classes.root} classes={{dividerBar: classes.divider, header: classes.header}} header={header} logo="none">
            {children}
        </Card>
    )
}
