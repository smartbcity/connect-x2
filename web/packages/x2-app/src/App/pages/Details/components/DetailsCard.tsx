import { CodeHighlighter } from "@smartb/archetypes-ui-components";
import { Panel } from "components"
import { useTranslation } from "react-i18next"
import { SessionLog } from "ssm";
import { highLevelStyles } from "utils";

const useStyles = highLevelStyles({
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

interface DetailsCardProps {
    currentLog?: SessionLog
}

export const DetailsCard = (props: DetailsCardProps) => {
    const { currentLog } = props
    const { t } = useTranslation()
    const classes = useStyles()

    return (
        <Panel className={classes.panel} noPadding bodyClassName={classes.body} header={t("detailsPage.transactionDetails")}>
            {currentLog && <CodeHighlighter object={{
                origin: currentLog.state.origin,
                public: currentLog.state.public,
            }} language="json" />}
        </Panel>
    )
}
