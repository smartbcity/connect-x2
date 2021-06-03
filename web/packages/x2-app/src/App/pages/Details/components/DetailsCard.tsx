import { Panel, TransactionDetails } from "components"
import { useTranslation } from "react-i18next"
import { SessionLog } from "ssm";
import { highLevelStyles } from "@smartb/archetypes-ui-themes";
import { Box, Typography } from "@material-ui/core";

const useStyles = highLevelStyles()({
    panel: {
        width: "40%"
    },
    body: {
        height: "450px",
        overflow: "auto",
    }
})

interface DetailsCardProps {
    transaction?: Transaction
}

export const DetailsCard = (props: DetailsCardProps) => {
    const { transaction } = props
    const { t } = useTranslation()
    const classes = useStyles()
    const embed = transaction ? `${window.location.origin}/embed/${transaction?.state.ssm}/${transaction?.state.session}/${currentLog?.txId}/details` : undefined
    return (
        <Panel 
        className={classes.panel} 
        noPadding 
        bodyClassName={classes.body} 
        header={t("detailsPage.transactionDetails")}
        embedUrl={embed}
        >
            {v === undefined ? (
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
                    <Typography align="center">
                        {t("detailsPage.selectATransaction")}
                    </Typography>
                </Box>
            ) : (
                <TransactionDetails transaction={transaction} />
            )}
        </Panel>
    )
}
