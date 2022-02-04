
import { makeG2STyles } from '@smartb/g2-themes'
import React from 'react'
import { EmbedCodeViewer } from '../EmbedCodeViewer'
import { Card, CardHeader, CardContent, Divider, Typography } from "@mui/material"

const useStyles = makeG2STyles()(
    (theme) => ({
        root: {
            margin: "20px 10px",
            flexGrow: 1,
            maxWidth: "1200px",
            minWidth: "400px",
            overflow: "hidden",
            boxShadow: theme.shadows[3]
        },
        divider: {
            height: "1px",
            width: "100%",
            background: theme.colors.tertiary,
            left: "0%",
            border: "none"
        },
        header: {
            boxSizing: "border-box",
            width: "100%",
            padding: "10px",
            paddingLeft: "30px",
            "& h6": {
                fontSize: "17px",
                lineHeight: "1.3"
            }
        },
        bodyWithNoPadding: {
            padding: 0,
            boxSizing: "border-box",
            width: "100%",
            "&:last-child": {
                padding: 0
            }
        },
        body: {
            postion: "relative"
        },
        embedViewer: {
            color: "white",
            zIndex: 5,
            right: "10px"
        }
    }))

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

    const { classes, cx } = useStyles()
    return (
        <Card sx={{ maxWidth: 345 }} className={cx(classes.root, className)}>
            <CardHeader
            className={classes.header}
                action={!!embedUrl && <EmbedCodeViewer className={classes.embedViewer} embedUrl={embedUrl} />}
                title={<Typography variant="h6">{header}</Typography>}
            />
            <Divider className={classes.divider} />
            <CardContent className={cx(classes.body, noPadding && classes.bodyWithNoPadding, bodyClassName)}>
                {children}
            </CardContent>
        </Card>
    )
}
