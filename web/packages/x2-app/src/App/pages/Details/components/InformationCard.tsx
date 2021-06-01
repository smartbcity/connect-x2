import { Panel, SessionInformations } from "components"
import { useTranslation } from "react-i18next"
import { highLevelStyles } from "@smartb/archetypes-ui-themes"
import { Session } from "ssm";

const useStyles = highLevelStyles()({
    panel: {
        width: "40%"
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
        <Panel 
        className={classes.panel} 
        noPadding 
        bodyClassName={classes.body} 
        header={t("detailsPage.sessionInformations")}
        embedUrl={`${window.location.origin}/embed/${currentSession?.ssm}/${currentSession.session}/informations`}
        >
            <SessionInformations currentSession={currentSession}  />
        </Panel>
    )
}
