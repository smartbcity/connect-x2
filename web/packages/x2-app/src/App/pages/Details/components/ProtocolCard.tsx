import { AutomateViewer } from "@smartb/archetypes-ui-s2"
import {Panel} from "components"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { SSM } from "ssm"
import { highLevelStyles } from "utils"

const useStyles = highLevelStyles({
    panel: {
        width: "40%"
    },
    viewer: {
        height: "300px"
    }
})

interface ProtocolCardProps {
    currentSSM?: SSM
}

export const ProtocolCard = (props: ProtocolCardProps) => {
    const {currentSSM} = props
    const {t} = useTranslation()
    const transitions = useMemo(() => currentSSM ? currentSSM.transitions.map((transition) => ({...transition, label: `${transition.role}: ${transition.action}`})) : [], [currentSSM])
    const classes = useStyles()
    return (
        <Panel className={classes.panel} header={t("protocolDiagram")}>
            <AutomateViewer transitions={transitions} className={classes.viewer}/>
        </Panel>
    )
}
