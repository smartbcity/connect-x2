import {Panel} from "components"
import { useTranslation } from "react-i18next"

export const InformationCard = () => {
    const {t} = useTranslation()
    return (
        <Panel header={t("Details Page.Item_informations")}>
            <div style={{height: "200px"}}/>
        </Panel>
    )
}
