import { CodeHighlighter, Tooltip } from "@smartb/archetypes-ui-components";
import { Clipboard, Panel } from "components"
import { useTranslation } from "react-i18next"
import { SessionLog } from "ssm";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { Box, IconButton, InputLabel, Typography } from "@material-ui/core";
import { useCallback } from "react";

const useStyles = highLevelStyles()({
    panel: {
        width: "40%",
        "& pre": {
            width: "500px",
            margin: "20px",
            marginTop: "0px",
            border: "1px solid #BFC0C3",
            borderRadius: "4px"
        }
    },
    body: {
        height: "450px",
        overflow: "auto",
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
    descriptionContainer: {
        display: "inline-flex",
    },
    typo: {
        margin: "15px"
    },
    clipboardIcon: {
        width: "20px",
        height: "20px"
    },
    iconButton: {
        position: "absolute",
        right: "-44px",
        top: "-14px"
    },
})

interface DetailsCardProps {
    currentLog?: SessionLog
}

export const DetailsCard = (props: DetailsCardProps) => {
    const { currentLog } = props
    const { t } = useTranslation()
    const classes = useStyles()

    const onCopyTransctionId = useCallback(
        () => currentLog && navigator.clipboard.writeText(currentLog.txId),
        [currentLog],
    )

    return (
        <Panel className={classes.panel} noPadding bodyClassName={classes.body} header={t("detailsPage.transactionDetails")}>
            {currentLog === undefined ? (
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
                    <Typography align="center">
                        {t("detailsPage.selectATransaction")}
                    </Typography>
                </Box>
            ) : (
                <>
                    <Box className={classes.descriptionContainer}>
                        <Box className={classes.box} >
                            <InputLabel>{t("transactionId")}:</InputLabel>
                            <InputLabel>{t("detailsPage.transactionDate")}:</InputLabel>
                            <InputLabel>{t("user")}:</InputLabel>
                            <InputLabel>{t("from")}:</InputLabel>
                            <InputLabel>{t("to")}:</InputLabel>
                            <InputLabel>{t("publicKey")}:</InputLabel>
                        </Box>
                        <Box className={classes.box}>
                            <Box position="relative">
                                <Typography className={classes.rightTypo}>{currentLog.txId}</Typography>
                                <Tooltip helperText="copy to clipboard">
                                    <IconButton className={classes.iconButton} onClick={onCopyTransctionId}>
                                        <Clipboard className={classes.clipboardIcon} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Typography className={classes.rightTypo}>Not yet implemented</Typography>
                            <Typography className={classes.rightTypo}>Not yet implemented</Typography>
                            <Typography className={classes.rightTypo}>{currentLog.state.origin.from}</Typography>
                            <Typography className={classes.rightTypo}>{currentLog.state.origin.to}</Typography>
                            <Typography className={classes.rightTypo}>Not yet implemented</Typography>
                        </Box>
                    </Box>
                    <Typography className={classes.typo}>{t("detailsPage.transactionPayload")}:</Typography>
                    <CodeHighlighter object={{
                        origin: currentLog.state.origin,
                        public: currentLog.state.public,
                    }} language="json" />
                </>
            )}
        </Panel>
    )
}
