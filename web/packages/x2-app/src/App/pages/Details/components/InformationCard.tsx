import { Panel } from "components"
import { useTranslation } from "react-i18next"
import { highLevelStyles } from "utils"
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Session } from "ssm";
import stringifyObject from 'stringify-object'
import { useMemo } from "react";

const useStyles = highLevelStyles({
    panel: {
        width: "40%"
    },
    highlighter: {
        height: "100%",
        margin: "0 !important"
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
    const highlighted = useMemo(() => {
        if (!currentSession) return
        return stringifyObject({
            id: currentSession.session,
            protocol: currentSession.ssm,
            roles: currentSession.roles,
            currentState: currentSession.current,
        }, {
            indent: '  ',
            singleQuotes: false,
        })
    }, [currentSession])
    return (
        <Panel className={classes.panel} noPadding bodyClassName={classes.body} header={t("detailsPage.sessionInformations")}>
            <SyntaxHighlighter className={classes.highlighter} language="json" style={tomorrow}>
                {highlighted ?? ""}
            </SyntaxHighlighter>
        </Panel>
    )
}
