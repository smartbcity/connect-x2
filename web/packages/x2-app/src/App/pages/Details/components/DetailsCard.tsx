import {Panel} from "components"
import { useTranslation } from "react-i18next"

export const DetailsCard = () => {
    const {t} = useTranslation()
    return (
        <Panel header={t("detailsPage.itemDetails")}>
            <div style={{height: "200px"}}/>
        </Panel>
    )
}
