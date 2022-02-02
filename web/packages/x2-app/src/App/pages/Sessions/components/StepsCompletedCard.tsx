import { highLevelStyles } from "@smartb/g2-themes";
import { LineChart, Panel, useExtendedI18n } from "components"
import { useTranslation } from "react-i18next"
import { addMonths } from 'date-fns'
import { useCallback, useMemo, useState } from "react";
import { Box, Slider } from "@mui/material";

function rand() {
    return Math.round(Math.random() * (100 - 1) + 1);
}

const date = addMonths(new Date(), -8)

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
    },
    sliderLabel: {
        fontSize: "10px"
    },
    slider: {
        width: "350px",
        marginLeft: "25px"
    }
})


export const StepsCompletedCard = () => {
    const { t } = useTranslation()
    const classes = useStyles()

    const [periodRange, setPeriodRange] = useState<number[]>([(100 / 7) * 5, 100]);

    const handleChange = useCallback(
        //@ts-ignore
        (event: any, newValue: number | number[]) => {
            setPeriodRange(newValue as number[]);
        },
        [],
    )

    const { i18n } = useExtendedI18n()

    const getLocaleMonth = useCallback(
        (month: number) => {
            const options = { month: 'short', year: '2-digit' }
            //@ts-ignore
            return addMonths(date, month).toLocaleDateString(i18n.language, options)
        },
        [i18n.language],
    )

    const periods = useMemo(() => {
        const period = []
        const periodWithLabel = []
        for (let i = 0; i <= 7; i++) {
            const month = getLocaleMonth(i)
            period.push(month)
            periodWithLabel.push({ value: (100 / 7) * i, label: month })
        }
        return {
            period: period,
            periodWithLabel: periodWithLabel
        }
    }, [getLocaleMonth])

    const data = useMemo(() => {
        const titles = periods.period.slice(Math.round(periodRange[0] / (100 / 7)), Math.round(periodRange[1] / (100 / 7)) + 1)
        return {
            titles: titles,
            sets: [{
                label: 'step 1',
                data: titles.map(() => rand())
            }, {
                label: 'step 2',
                data: titles.map(() => rand())
            }, {
                label: 'step 3',
                data: titles.map(() => rand())
            }, {
                label: 'step 4',
                data: titles.map(() => rand())
            }, {
                label: 'step 5',
                data: titles.map(() => rand())
            }, {
                label: 'step 6',
                data: titles.map(() => rand())
            }, {
                label: 'step 7',
                data: titles.map(() => rand())
            }, {
                label: 'step 8',
                data: titles.map(() => rand())
            }]
        }
    }, [periods, periodRange])

    const valueLabelFormat = useCallback(
        (value: number) => {
            return periods.periodWithLabel.findIndex((period) => period.value === value) + 1;
        },
        [periods.periodWithLabel],
    )

    return (
        <Panel className={classes.root} bodyClassName={classes.body} header={t("sessionsPage.completedStepsDuringPeriod")}>
            <Slider
                defaultValue={periodRange}
                onChange={handleChange}
                color="secondary"
                className={classes.slider}
                classes={{ markLabel: classes.sliderLabel }}
                valueLabelFormat={valueLabelFormat}
                step={null}
                valueLabelDisplay="off"
                marks={periods.periodWithLabel}
            />
            <Box width="100%" height="calc(100% - 60px)">
                <LineChart data={data} />
            </Box>

        </Panel>
    )
}
