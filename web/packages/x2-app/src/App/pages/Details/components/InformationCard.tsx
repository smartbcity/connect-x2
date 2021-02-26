import {Panel} from "components"
import { useTranslation } from "react-i18next"

export const InformationCard = () => {
    const {t} = useTranslation()
    return (
        <Panel header={t("detailsPage.itemInformations")}>
            <div style={{height: "200px"}}/>
        </Panel>
    )
}
