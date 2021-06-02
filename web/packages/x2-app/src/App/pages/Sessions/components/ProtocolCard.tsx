import { AutomateViewer } from "@smartb/archetypes-ui-s2"
import {Panel} from "components"
import { useTranslation } from "react-i18next"
import { highLevelStyles } from "@smartb/archetypes-ui-themes"
import { SSM, Transition } from "ssm"
import { useMemo } from "react"

const useStyles = highLevelStyles()({
    viewer: {
        height: "100%"
    },
    body: {
        height: "350px",
        overflow: "auto",
    },
    root: {
        width: "calc(33.3333333% - 30px)", 
        maxWidth: "700px", 
        '@media (max-width:1000px)': {
            width: "calc(100% - 20px)",
            maxWidth: "1200px",
        }
    }
})

interface ProtocolCardProps {
    currentSSM?: SSM
}

export const ProtocolCard = (props: ProtocolCardProps) => {
    const {currentSSM} = props
    const {t} = useTranslation()
    const classes = useStyles()
    const transitions = useMemo(() => currentSSM ? currentSSM.transitions.map((transition: Transition) => ({...transition, label: `${transition.role}: ${transition.action}`})) : [], [currentSSM])
    return (
        <Panel className={classes.root} bodyClassName={classes.body} noPadding header={t("protocolDiagram")} embedUrl={`${window.location.origin}/embed/${currentSSM?.name}/diagram`}>
            <AutomateViewer transitions={transitions} className={classes.viewer}/>
        </Panel>
    )
}
