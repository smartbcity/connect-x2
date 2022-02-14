import { Panel, SessionInformations } from "components"
import { useTranslation } from "react-i18next"
import { makeG2STyles } from "@smartb/g2-themes"
import {Session, SsmUriDTO, useSsmUri} from "ssm";

const useStyles = makeG2STyles()({
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
    const { classes } = useStyles()
    const { t } = useTranslation()
    const {path} = useSsmUri(ssmUri)

    return (
        <Panel 
        className={classes.panel} 
        noPadding 
        bodyClassName={classes.body} 
        header={t("detailsPage.sessionInformations")}
        embedUrl={`${window.location.origin}/embed/${path}/${currentSession.sessionName}/informations`}
        >
            <SessionInformations currentSession={currentSession}  />
        </Panel>
    )
}
