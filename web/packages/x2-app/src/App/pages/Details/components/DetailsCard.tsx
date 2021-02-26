import {Panel} from "components"
import { useTranslation } from "react-i18next"

export const DetailsCard = () => {
    const {t} = useTranslation()
    return (
        <Panel header={t("Details Page.Item_details")}>
            <div style={{height: "200px"}}/>
        </Panel>
    )
}
