import {Panel} from "components"
import { useTranslation } from "react-i18next"

export const SessionNumberCard = () => {
    const {t} = useTranslation()
    return (
        <Panel header={t("sessionsPage.sessionNumber")}>
            <div style={{height: "200px"}}/>
        </Panel>
    )
}
