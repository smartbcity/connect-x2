import { Typography } from "@material-ui/core"
import { Timeline, TimeLineCell } from "@smartb/archetypes-ui-components"
import {Panel} from "components"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export const HistoryCard = () => {
    const {t} = useTranslation()
    const [selectedCellId, setSelectedCellId] = useState<string | undefined>(undefined)
    const lines: TimeLineCell[] = [{
        id: "time line 1",
        content: <Typography>Delivery linked to bonus by the API</Typography>,
        startTime: "12/02/2021"
    },
    {
        id: "time line 2",
        content: <Typography>Delivery rejected by the AI auditing</Typography>,
        startTime: "01/02/2021"
    },
    {
        id: "time line 3",
        content: <Typography>Second batch of delivery data are transferrred</Typography>,
        startTime: "22/01/2021"
    },
    {
        id: "time line 4",
        content: <Typography>First batch of delivery data are transferrred by the user</Typography>,
        startTime: "12/01/2021"
    }]
    return (
        <Panel header={t("detailsPage.itemHistory")}>
            <Timeline 
            lines={lines}
            passedTimeLine
            selectedCellId={selectedCellId}
            onSelectCell={(cell) => setSelectedCellId(prevCellId => cell.id === prevCellId ? undefined : cell.id)}
            />
        </Panel>
    )
}
