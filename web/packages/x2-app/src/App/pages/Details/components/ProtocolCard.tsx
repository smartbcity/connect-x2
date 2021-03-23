import { AutomateViewer } from "@smartb/archetypes-ui-components"
import {Panel} from "components"
import { useTranslation } from "react-i18next"
import {getDidS2} from "@smartb/did-domain"
import { highLevelStyles } from "utils"

const useStyles = highLevelStyles({
    viewer: {
        height: "300px"
    }
})

export const ProtocolCard = () => {
    const {t} = useTranslation()
    const classes = useStyles()
    return (
        <Panel header={t("detailsPage.protocolDiagram")}>
            <AutomateViewer automate={getDidS2()} className={classes.viewer}/>
        </Panel>
    )
}
