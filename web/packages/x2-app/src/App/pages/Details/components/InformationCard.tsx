import { Panel } from "components"
import { useTranslation } from "react-i18next"
import { highLevelStyles } from "@smartb/archetypes-ui-themes"
import { Session } from "ssm";
import { Box, InputLabel, Typography } from "@material-ui/core";

const useStyles = highLevelStyles()({
    panel: {
        width: "40%",
        "& pre": {
            height: "100%",
            margin: "0 !important"
        }
    },
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
        height: "300px",
        margin: "15px"
    },
    descriptionContainer: {
        display:"inline-flex",
        justifyContent:"center",
        alignItems:"center",
    },
    rightTypo: {
        lineHeight: 1,
        whiteSpace: "nowrap",
        maxWidth: "250px",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    body: {
        height: "450px",
        overflow: "auto"
    }
})

interface InformationCardProps {
    currentSession?: Session
}

export const InformationCard = (props: InformationCardProps) => {
    const { currentSession } = props
    const classes = useStyles()
    const { t } = useTranslation()
    if (!currentSession) return (<></>)
    return (
        <Panel className={classes.panel} noPadding bodyClassName={classes.body} header={t("detailsPage.sessionInformations")}>
            <Box className={classes.descriptionContainer}>
                <Box className={classes.box} width="200px" minWidth="200px">
                    <InputLabel>Session name:</InputLabel>
                    <InputLabel>Creation date:</InputLabel>
                    <InputLabel>Current step:</InputLabel>
                    <InputLabel>Last action performed:</InputLabel>
                    <InputLabel>Channel:</InputLabel>
                    <InputLabel>Protocol engine version:</InputLabel>
                    <InputLabel>Protocol engine:</InputLabel>
                </Box>
                <Box className={classes.box}>
                    <Typography className={classes.rightTypo}>{currentSession.session}</Typography>
                    <Typography className={classes.rightTypo}>Not yet implemented</Typography>
                    <Typography className={classes.rightTypo}>{currentSession.current}</Typography>
                    <Typography className={classes.rightTypo}>{`${currentSession.origin.role}: ${currentSession.origin.action}`}</Typography>
                    <Typography className={classes.rightTypo}>Not yet implemented</Typography>
                    <Typography className={classes.rightTypo}>Not yet implemented</Typography>
                    <Typography className={classes.rightTypo}>Not yet implemented</Typography>
                </Box>
            </Box>

        </Panel>
    )
}
