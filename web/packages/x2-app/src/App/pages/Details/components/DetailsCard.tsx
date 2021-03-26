import { Panel } from "components"
import { useMemo } from "react";
import { useTranslation } from "react-i18next"
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SessionLog } from "ssm";
import { highLevelStyles } from "utils";
import stringifyObject from 'stringify-object'

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

interface DetailsCardProps {
    currentLog?: SessionLog
}

export const DetailsCard = (props: DetailsCardProps) => {
    const { currentLog } = props
    const { t } = useTranslation()
    const classes = useStyles()

    const highlighted = useMemo(() => {
        if (!currentLog) return
        return stringifyObject({
            origin: currentLog.state.origin,
            public: currentLog.state.public,
        }, {
            indent: '  ',
            singleQuotes: false,
        })
    }, [currentLog])
    return (
        <Panel className={classes.panel} noPadding bodyClassName={classes.body} header={t("detailsPage.transactionDetails")}>
            <SyntaxHighlighter className={classes.highlighter} language="json" style={tomorrow}>
                {highlighted ?? ""}
            </SyntaxHighlighter>
        </Panel>
    )
}
