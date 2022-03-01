import { AutomateViewer } from "@smartb/g2-s2"
import {Panel} from "components"
import { useTranslation } from "react-i18next"
import { makeG2STyles } from "@smartb/g2-themes"
import { SSM, SsmUriDTO, Transition, useSsmUri } from "ssm"
import { useMemo } from "react"

const useStyles = makeG2STyles()({
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
    ssmUri: SsmUriDTO
}

export const ProtocolCard = (props: ProtocolCardProps) => {
    const {currentSSM, ssmUri} = props
    const {t} = useTranslation()
    const { classes } = useStyles()
    const {path} = useSsmUri(ssmUri)
    const transitions = useMemo(() => currentSSM ? currentSSM.ssm.transitions.map((transition: Transition) => ({...transition, label: `${transition.role}: ${transition.action}`})) : [], [currentSSM])
    return (
        <Panel className={classes.root} bodyClassName={classes.body} noPadding header={t("protocolDiagram")} embedUrl={`${window.location.origin}/embed/${path}/diagram`}>
            <AutomateViewer transitions={transitions} className={classes.viewer}/>
        </Panel>
    )
}
