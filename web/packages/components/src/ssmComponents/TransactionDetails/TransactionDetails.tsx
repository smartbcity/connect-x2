import { Box, InputLabel, Typography } from '@material-ui/core'
import { CodeHighlighter, CopyToClipboard } from '@smartb/archetypes-ui-components'
import { midLevelStyles } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { SessionLog } from 'ssm'

const useStyles = midLevelStyles()({
    preContainer: {
        padding: "20px",
        paddingTop: "0px",
        width: "max-content",
        "& pre": {
            maxWidth: "500px",
            margin: 0,
            width: "calc(100vw - 60px)",
            border: "1px solid #BFC0C3",
            borderRadius: "4px"
        }
    },
    rightTypo: {
        lineHeight: 1,
        whiteSpace: "nowrap",
        maxWidth: "250px",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexShrink: 0,
        height: "200px",
        padding: "15px"
    },
    boxMinified: {
        height: "150px",
        padding: "10px 15px",
        "& label": {
            fontSize: "14px"
        }
    },
    descriptionContainer: {
        display: "inline-flex",
    },
    typo: {
        margin: "15px"
    },
    iconButton: {
        position: "absolute",
        right: "-44px",
        top: "-14px"
    },
})

interface TransactionDetailsProps {
    currentLog: SessionLog
    className?: string
    minified?: boolean
}

export const TransactionDetails = (props: TransactionDetailsProps) => {
    const { className, minified = false, currentLog } = props
    const classes = useStyles()
    const { t } = useTranslation()
    const typovariant = useMemo(() => minified ? "body2" : "body1", [minified])
    console.log(currentLog)
    return (
        <>
            <Box className={clsx(classes.descriptionContainer, className)}>
                <Box className={clsx(classes.box, minified && classes.boxMinified)} >
                    <InputLabel>{t("transactionId")}:</InputLabel>
                    <InputLabel>{t("detailsPage.transactionDate")}:</InputLabel>
                    <InputLabel>{t("user")}:</InputLabel>
                    <InputLabel>{t("from")}:</InputLabel>
                    <InputLabel>{t("to")}:</InputLabel>
                    <InputLabel>{t("publicKey")}:</InputLabel>
                </Box>
                <Box className={clsx(classes.box, minified && classes.boxMinified)}>
                    <Box position="relative">
                        <Typography variant={typovariant} className={classes.rightTypo}>{currentLog.txId}</Typography>
                        <CopyToClipboard className={classes.iconButton} value={currentLog.txId} helperText={t("copyToClipboard")} />
                    </Box>
                    <Typography variant={typovariant} className={classes.rightTypo}>Not yet implemented</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>Not yet implemented</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentLog.state?.origin?.from ?? ""}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{currentLog.state?.current ?? ""}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>Not yet implemented</Typography>
                </Box>
            </Box>
            <Typography className={classes.typo}>{t("detailsPage.transactionPayload")}:</Typography>
            <Box className={classes.preContainer}>
                <CodeHighlighter object={{
                    origin: currentLog.state.origin,
                    public: currentLog.state.public,
                }} language="json" />
            </Box>
        </>
    )
}
