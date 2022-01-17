import { Panel, SessionInformations } from "components"
import { useTranslation } from "react-i18next"
import { highLevelStyles } from "@smartb/g2-themes"
import {Session, SsmUriDTO, toUrlPath} from "ssm";

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
    ssmUri: SsmUriDTO
}

export const InformationCard = (props: InformationCardProps) => {
    const { currentSession, ssmUri } = props
    const classes = useStyles()
    const { t } = useTranslation()
    const urlPath = toUrlPath(ssmUri)

    return (
        <Panel 
        className={classes.panel} 
        noPadding 
        bodyClassName={classes.body} 
        header={t("detailsPage.sessionInformations")}
        embedUrl={`${window.location.origin}/embed/${urlPath}/${currentSession.sessionName}/informations`}
        >
            <SessionInformations currentSession={currentSession}  />
        </Panel>
    )
}
