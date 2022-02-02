import { Box, InputLabel, Typography } from '@mui/material'
import { CodeHighlighter } from '@smartb/g2-documentation'
import { makeG2STyles } from '@smartb/g2-themes'
import clsx from 'clsx'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { SessionState } from 'ssm'
import { CopyToClipboard } from '../../components/CopyToClipboard'

const useStyles = makeG2STyles()(
  (theme) => ({
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
        textOverflow: "ellipsis",
        minHeight: "14px"
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
    shortBox: {
        height: "80px",
        padding: "10px 5px",
        "& label": {
            fontSize: "14px"
        }
    },
    rightTypoShort: {
        maxWidth: "200px",
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
    generateButton: {
        background: theme.colors.secondary,
        padding: "4px 7px",
        "&:hover": {
            background: theme.colors.secondary,
        }
    }
})

interface TransactionDetailsProps {
    transaction: SessionState
    className?: string
    minified?: boolean
    shortVersion?: boolean
}

export const TransactionDetails = (props: TransactionDetailsProps) => {
    const { className, minified = false, transaction, shortVersion = false } = props
    
    const { classes } = useStyles(theme)
    const { t } = useTranslation()
    const typovariant = useMemo(() => minified ? "body2" : "body1", [minified])

    if (shortVersion) return (
        <>
            <Box className={clsx(classes.descriptionContainer, className)}>
                <Box className={clsx(classes.box, classes.shortBox)} style={{paddingLeft: 0}} >
                    <InputLabel>{t("transactionId")}:</InputLabel>
                    <InputLabel>{t("user")}:</InputLabel>
                    <InputLabel>{t("publicKey")}:</InputLabel>
                </Box>
                <Box className={clsx(classes.box, classes.shortBox)} style={{paddingRight: 0}}>
                    <Box position="relative">
                        <Typography variant={typovariant} className={clsx(classes.rightTypo, classes.rightTypoShort)}>{transaction.transaction?.transactionId}</Typography>
                        <CopyToClipboard className={classes.iconButton} value={transaction.transaction?.transactionId ?? ""} />
                    </Box>
                    <Typography variant={typovariant} className={clsx(classes.rightTypo, classes.rightTypoShort)}>{transaction.transaction?.creator.mspid}</Typography>
                    <Box position="relative">
                        <Typography variant={typovariant} className={clsx(classes.rightTypo, classes.rightTypoShort)}>{transaction.transaction?.creator.id}</Typography>
                        <CopyToClipboard className={classes.iconButton} value={transaction.transaction?.creator.id ?? ""} />
                    </Box>
                </Box>
            </Box>
        </>
    )
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
                        <Typography variant={typovariant} className={classes.rightTypo}>{transaction.transaction?.transactionId}</Typography>
                        <CopyToClipboard className={classes.iconButton} value={transaction.transaction?.transactionId ?? ""} />
                    </Box>
                    <Typography variant={typovariant} className={classes.rightTypo}>{new Date(transaction.transaction?.timestamp).toLocaleString()}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{transaction.transaction?.creator.mspid}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{transaction.details?.origin?.from ?? ""}</Typography>
                    <Typography variant={typovariant} className={classes.rightTypo}>{transaction.details?.current ?? ""}</Typography>
                    <Box position="relative">
                        <Typography variant={typovariant} className={classes.rightTypo}>{transaction.transaction?.creator.id}</Typography>
                        <CopyToClipboard className={classes.iconButton} value={transaction.transaction?.creator.id ?? ""} />
                    </Box>
                </Box>
            </Box>
            <Typography className={classes.typo}>{t("detailsPage.transactionPayload")}:</Typography>
            <Box className={classes.preContainer}>
                <CodeHighlighter object={{
                    origin: transaction.details.origin,
                    public: transaction.details.public,
                }} language="json" />
            </Box>
        </>
    )
}
