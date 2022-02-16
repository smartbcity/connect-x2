import { makeG2STyles } from "@smartb/g2-themes";
import { LineChart, LoadingComponent, Panel, useExtendedI18n } from "components"
import { useTranslation } from "react-i18next"
import { useCallback, useMemo } from "react";
import { Box } from "@mui/material";
import { CellDTO } from "ssm";

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

export interface StepsCompletedCardProps {
    stats: CellDTO<number[]>[]
    isLoading?: boolean
}

export const StepsCompletedCard = (props: StepsCompletedCardProps) => {
    const {stats, isLoading} = props
    const { t } = useTranslation()
    const { classes } = useStyles()

    const { i18n } = useExtendedI18n()

    //get the locale month label of a date
    const getLocaleMonth = useCallback(
        (date: number) => {
            const options = { month: 'short', year: '2-digit' }
            //@ts-ignore
            return new Date(date).toLocaleDateString(i18n.language, options)
        },
        [i18n.language],
    )

    const data = useMemo(() => {
        return {
            //needs to be set
            titles: [],
            sets: stats
        }
    }, [stats])

    return (
        <Panel className={classes.root} bodyClassName={classes.body} header={t("sessionsPage.completedStepsDuringPeriod")}>
            {isLoading ? <LoadingComponent/>
            :<Box width="100%" height="calc(100% - 60px)">
                <LineChart data={data} />
            </Box>}
        </Panel>
    )
}
