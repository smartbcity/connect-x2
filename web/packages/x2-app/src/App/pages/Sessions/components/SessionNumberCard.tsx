import { highLevelStyles } from "@smartb/archetypes-ui-themes"
import { BarChart, Panel } from "components"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"

const useStyles = highLevelStyles()({
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


export const SessionNumberCard = () => {
    const { t } = useTranslation()

    const data = useMemo(() => ([{
        label: 'Step 1',
        value: 1550
    },{
        label: 'Step 2',
        value: 9563
    },{
        label: 'Step 3',
        value: 2786
    },{
        label: 'Step 4',
        value: 8212
    },{
        label: 'Step 5',
        value: 5746
    },{
        label: 'Step 6',
        value: 7426
    },{
        label: 'Step 7',
        value: 3241
    },{
        label: 'Step 8',
        value: 4689
    }]), [])

    const classes = useStyles()

    return (
        <Panel className={classes.root} bodyClassName={classes.body} header={t("sessionsPage.sessionNumber")} >
            <BarChart data={data} />
        </Panel >
    )
}
