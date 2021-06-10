import { Box, InputLabel, Typography } from '@material-ui/core'
import { midLevelStyles } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {Session} from "ssm"

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
    const init = currentSession.currentState.details?.origin?.role === undefined && currentSession.currentState.details?.origin?.action === undefined
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
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentSession.id}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{new Date(currentSession.creationTransaction?.timestamp).toLocaleDateString()}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentSession.currentState.details.current}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{init ? "initialization" : `${currentSession.currentState.details.origin?.role}: ${currentSession.currentState.details.origin?.action}`}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentSession.channel.id}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>Not implemented</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentSession.currentState.details.ssm}</Typography>
                </Box>
            </Box>
    )
}
