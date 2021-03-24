import {Panel} from "components"
import { useTranslation } from "react-i18next"

export const StepsCompletedCard = () => {
    const {t} = useTranslation()
    return (
        <Panel header={t("sessionsPage.completedStepsDuringPeriod")}>
            <div style={{height: "200px"}}/>
        </Panel>
    )
}
