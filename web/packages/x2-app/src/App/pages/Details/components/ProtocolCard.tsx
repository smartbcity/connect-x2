import { AutomateViewer } from "@smartb/archetypes-ui-s2"
import {Panel} from "components"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { SSM } from "ssm"
import { highLevelStyles } from "@smartb/archetypes-ui-themes"
import {ssm} from "x2-ssm-domain";

const useStyles = highLevelStyles()({
    panel: {
        width: "40%",
    },
    viewer: {
        height: "100%"
    },
    body: {
        height: "450px"
    }
})

interface ProtocolCardProps {
    currentSSM: SSM
}

export const ProtocolCard = (props: ProtocolCardProps) => {
    const {currentSSM} = props
    const {t} = useTranslation()

    const transitions = useAutomateTransition(currentSSM)
    const classes = useStyles()
    return (
        <Panel className={classes.panel} bodyClassName={classes.body} header={t("protocolDiagram")} embedUrl={`${window.location.origin}/embed/${currentSSM.ssm.name}/diagram`}>
            <AutomateViewer transitions={transitions} className={classes.viewer}/>
        </Panel>
    )
}

const useAutomateTransition = (currentSSM: SSM) => {
    return useMemo(() => currentSSM.ssm.transitions.map((transition: ssm.chaincode.dsl.SsmTransitionDTO) => ({
        ...transition,
        label: `${transition.role}: ${transition.action}`
    })), [currentSSM]);
}
