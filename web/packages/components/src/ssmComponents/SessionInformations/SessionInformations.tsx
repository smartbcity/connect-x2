import { Box, InputLabel, Typography } from '@material-ui/core'
import { midLevelStyles } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {Session} from "ssm"
import { CopyToClipboard } from '../../components/CopyToClipboard'

const useStyles = midLevelStyles()({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
        flexShrink: 0,
        height: "300px",
        padding: "15px"
    },
    boxMinified: {
        height: "230px",
        padding: "10px 15px",
        "& label": {
            fontSize: "14px"
        }
    },
    descriptionContainer: {
        display:"inline-flex",
    },
    rightTypo: {
        lineHeight: 1,
        whiteSpace: "nowrap",
        maxWidth: "250px",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    iconButton: {
        position: "absolute",
        right: "-44px",
        top: "-14px"
    }
})

interface SessionInformationsProps {
    currentSession: Session
    className?: string
    minified?: boolean
}

export const SessionInformations = (props: SessionInformationsProps) => {
    const { currentSession, className, minified = false } = props
    const classes = useStyles()
    const {t} = useTranslation()
    const typovariant = useMemo(() => minified ? "body2" : "body1", [minified])
    const init = currentSession.state.details?.origin?.role === undefined && currentSession.state.details?.origin?.action === undefined
    return (
        <Box className={clsx(classes.descriptionContainer, className)}>
                <Box className={clsx(classes.box, minified && classes.boxMinified)}>
                    <InputLabel>{t("sessionId")}:</InputLabel>
                    <InputLabel>{t("creationDate")}:</InputLabel>
                    <InputLabel>{t("detailsPage.currentStep")}:</InputLabel>
                    <InputLabel>{t("detailsPage.LastActionPerformed")}:</InputLabel>
                    <InputLabel>{t("channel")}:</InputLabel>
                    <InputLabel>{t("protocolEngineVersion")}:</InputLabel>
                    <InputLabel>{t("protocolEngine")}:</InputLabel>
                </Box>
                <Box className={clsx(classes.box, minified && classes.boxMinified)}>
                    <Box position="relative">
                        <Typography variant={typovariant} className={classes.rightTypo}>{currentSession.id}</Typography>
                        <CopyToClipboard className={classes.iconButton} value={currentSession.id} />
                    </Box>
                    <Typography variant={typovariant} className={classes.rightTypo}>{new Date(currentSession.transaction?.timestamp).toLocaleDateString()}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentSession.state.details.current}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{init ? "initialization" : `${currentSession.state.details.origin?.role}: ${currentSession.state.details.origin?.action}`}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentSession.channel.id}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>Not implemented</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentSession.state.details.ssm}</Typography>
                </Box>
            </Box>
    )
}
