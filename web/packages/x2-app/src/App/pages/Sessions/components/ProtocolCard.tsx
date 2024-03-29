import { AutomateViewer } from "@smartb/g2-s2"
import {Panel} from "components"
import { useTranslation } from "react-i18next"
import { makeG2STyles } from "@smartb/g2-themes"
import {Protocol, Transition} from "ssm"
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
    protocol: Protocol
}

export const ProtocolCard = (props: ProtocolCardProps) => {
    const {protocol} = props
    const {t} = useTranslation()
    const { classes } = useStyles()
    // const {path} = useSsmUri(ssmUri)
    const transitions = useMemo(() => protocol ? protocol.ssm.transitions.map((transition: Transition) => ({...transition, label: `${transition.role}: ${transition.action}`})) : [], [protocol])
    return (
        <Panel className={classes.root} bodyClassName={classes.body} noPadding header={t("protocolDiagram")} embedUrl={`${window.location.origin}/embed/${protocol}/diagram`}>
            <AutomateViewer transitions={transitions} className={classes.viewer}/>
        </Panel>
    )
}
