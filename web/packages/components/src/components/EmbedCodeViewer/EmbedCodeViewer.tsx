import { Box, IconButton, Typography } from '@mui/material'
import { CodeRounded } from '@mui/icons-material'
import { Tooltip, Popover } from '@smartb/g2-notifications'
import { CodeHighlighter } from '@smartb/g2-documentation'
import { midLevelStyles, Theme, useTheme } from '@smartb/g2-themes'
import clsx from 'clsx'
import React, { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'


const getEmbedString = (embedUrl: string) => `<iframe 
width="300" 
height="300" 
src="${embedUrl}" 
title="X2 embed content" 
frameborder="0" 
allowfullscreen>
</iframe>`

const useStyles = midLevelStyles<Theme>()({
    popover: {
        width: "500px",
        height: "400px"
    },
    ifram: {
        flexGrow: 1,
        borderRadius: "4px",
        border: "1px solid #676879"
    },
    button: {
        background: theme => theme.colors.primary,
        padding: "5px",
        "&:hover": {
            background: theme => theme.colors.primary,
        }
    },
    icon: {
        color: "#676879",
    }
})

interface EmbedCodeViewerProps {
    embedUrl: string
    className?: string
}

export const EmbedCodeViewer = (props: EmbedCodeViewerProps) => {
    const { embedUrl, className } = props
    const {t} = useTranslation()
    const [anchor, setanchor] = useState<HTMLElement | undefined>(undefined)
    const theme = useTheme()
    const classes = useStyles(theme)
    const onClick = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            setanchor(event.currentTarget)
        },
        [],
    )
    const onClose = useCallback(
        () => {
            setanchor(undefined)
        },
        [],
    )

    const embedString = useMemo(() => getEmbedString(embedUrl), [embedUrl])

    return <>
        <Tooltip helperText={t("panelComponent.viewEmbedCode")}>
            <IconButton
                className={clsx(className, classes.button)}
                onClick={onClick}
                size="large">
                <CodeRounded className={classes.icon} />
            </IconButton>
        </Tooltip>
        <Popover className={classes.popover} open={!!anchor} anchorEl={anchor} closeOnClickAway onClose={onClose}>
            <Box display="flex" width="100%" height="100%" flexDirection="column">
                <CodeHighlighter language="html" code={embedString} />
                <Typography variant="body2">{t("preview")}:</Typography>
                <iframe
                    className={classes.ifram}
                    src={embedUrl}
                    title="X2 embed content">
                </iframe>
            </Box>
        </Popover>
    </>;
}
