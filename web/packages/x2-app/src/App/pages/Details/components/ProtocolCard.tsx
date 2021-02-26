import { AutomateViewer } from "@smartb/archetypes-ui-components"
import {highLevelStyles, Panel} from "components"
import { useTranslation } from "react-i18next"
import {getDidS2} from "@smartb/did-domain"

const useStyles = highLevelStyles({
    viewer: {
        height: "300px"
    }
})

export const ProtocolCard = () => {
    const {t} = useTranslation()
    const classes = useStyles()
    return (
        <Panel header={t("Details Page.Protocol_diagram")}>
            <AutomateViewer automate={getDidS2()} className={classes.viewer}>

            </AutomateViewer>
        </Panel>
    )
}
