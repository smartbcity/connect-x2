import { makeG2STyles } from "@smartb/g2-themes"
import { BarChart, LoadingComponent, Panel } from "components"
import { useTranslation } from "react-i18next"
import { CellDTO } from "ssm"

const useStyles = makeG2STyles()({
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

interface SessionNumberCardProps {
    stats: CellDTO[]
    isLoading?: boolean
}

export const SessionNumberCard = (props: SessionNumberCardProps) => {
    const { stats, isLoading = false} = props
    const { t } = useTranslation()

    const { classes } = useStyles()

    return (
        <Panel className={classes.root} bodyClassName={classes.body} header={t("sessionsPage.sessionNumber")} >
            {isLoading ? 
            <LoadingComponent />
            :
            <BarChart data={stats} />
            }
        </Panel >
    )
}
