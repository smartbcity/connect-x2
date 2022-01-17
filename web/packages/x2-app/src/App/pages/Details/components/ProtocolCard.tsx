import { AutomateViewer } from "@smartb/g2-s2"
import {Panel} from "components"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import {SSM, SsmTransitionDTO, SsmUriDTO, toUrlPath} from "ssm"
import { highLevelStyles } from "@smartb/g2-themes"

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
    ssmUri: SsmUriDTO
}

export const ProtocolCard = (props: ProtocolCardProps) => {
    const {currentSSM, ssmUri} = props
    const {t} = useTranslation()
    const urlPath = toUrlPath(ssmUri)

    const transitions = useAutomateTransition(currentSSM)
    const classes = useStyles()
    return (
        <Panel className={classes.panel} bodyClassName={classes.body} header={t("protocolDiagram")} embedUrl={`${window.location.origin}/embed/${urlPath}/diagram`}>
            <AutomateViewer transitions={transitions} className={classes.viewer}/>
        </Panel>
    )
}

const useAutomateTransition = (currentSSM: SSM) => {
    return useMemo(() => currentSSM.ssm.transitions.map((transition: SsmTransitionDTO) => ({
        ...transition,
        label: `${transition.role}: ${transition.action}`
    })), [currentSSM]);
}
