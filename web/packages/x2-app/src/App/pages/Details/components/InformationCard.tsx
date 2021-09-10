import { Panel, SessionInformations } from "components"
import { useTranslation } from "react-i18next"
import { highLevelStyles } from "@smartb/g2-themes"
import { Session } from "ssm";

const useStyles = highLevelStyles()({
    panel: {
        width: "40%"
    },
    body: {
        height: "450px",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center"
    }
})

interface InformationCardProps { 
    currentSession: Session
}

export const InformationCard = (props: InformationCardProps) => {
    const { currentSession } = props
    const classes = useStyles()
    const { t } = useTranslation()
    
    return (
        <Panel 
        className={classes.panel} 
        noPadding 
        bodyClassName={classes.body} 
        header={t("detailsPage.sessionInformations")}
        embedUrl={`${window.location.origin}/embed/${currentSession.state.details.ssm}/${currentSession.id}/informations`}
        >
            <SessionInformations currentSession={currentSession}  />
        </Panel>
    )
}
