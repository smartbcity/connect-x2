import { Panel } from "components"
import { useTranslation } from "react-i18next"
import { highLevelStyles } from "@smartb/archetypes-ui-themes"
import { Session } from "ssm";
import { CodeHighlighter } from "@smartb/archetypes-ui-components";

const useStyles = highLevelStyles()({
    panel: {
        width: "40%",
        "& pre": {
            height: "100%",
            margin: "0 !important"
        }
    },
    body: {
        height: "100%"
    }
})

interface InformationCardProps {
    currentSession?: Session
}

export const InformationCard = (props: InformationCardProps) => {
    const { currentSession } = props
    const classes = useStyles()
    const { t } = useTranslation()
    return (
        <Panel className={classes.panel} noPadding bodyClassName={classes.body} header={t("detailsPage.sessionInformations")}>
            {currentSession && <CodeHighlighter object={{
                id: currentSession.session,
                protocol: currentSession.ssm,
                roles: currentSession.roles,
                currentState: currentSession.current,
            }} language="json" />}
        </Panel>
    )
}
