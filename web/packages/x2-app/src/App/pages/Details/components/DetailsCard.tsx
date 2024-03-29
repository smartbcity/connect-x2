import { Panel, TransactionDetails } from "components"
import { useTranslation } from "react-i18next"
import {SessionState, SsmUriDTO, useSsmUri} from "ssm";
import { makeG2STyles } from "@smartb/g2-themes";
import { Box, Typography } from "@mui/material";

const useStyles = makeG2STyles()({
    panel: {
        width: "40%"
    },
    body: {
        height: "450px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})

interface DetailsCardProps {
    ssmUri: SsmUriDTO
    transaction?: SessionState
}

export const DetailsCard = (props: DetailsCardProps) => {
    const { transaction, ssmUri } = props
    const { t } = useTranslation()
    const { classes } = useStyles()
    const {path} = useSsmUri(ssmUri)

    const embed = transaction ? `${window.location.origin}/embed/${path}/${transaction?.details.session}/${transaction?.transaction?.transactionId}/details` : undefined
    return (
        <Panel 
        className={classes.panel} 
        noPadding 
        bodyClassName={classes.body} 
        header={t("detailsPage.transactionDetails")}
        embedUrl={embed}
        >
            {transaction === undefined ? (
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
