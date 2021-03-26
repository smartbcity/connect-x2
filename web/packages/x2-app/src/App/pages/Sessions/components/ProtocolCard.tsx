import { AutomateViewer } from "@smartb/archetypes-ui-s2"
import {Panel} from "components"
import { useTranslation } from "react-i18next"
import { highLevelStyles } from "utils"
import { SSM } from "ssm"
import { useMemo } from "react"

const useStyles = highLevelStyles({
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
    const classes = useStyles()
    const transitions = useMemo(() => currentSSM ? currentSSM.transitions.map((transition) => ({...transition, label: `${transition.role}: ${transition.action}`})) : [], [currentSSM])
    return (
        <Panel noPadding header={t("protocolDiagram")}>
            <AutomateViewer transitions={transitions} className={classes.viewer}/>
        </Panel>
    )
}
