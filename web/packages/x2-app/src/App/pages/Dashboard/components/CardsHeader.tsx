import { Box } from '@material-ui/core'
import { CheckCircleRounded } from '@material-ui/icons'
import { Ticket } from "@smartb/g2-components"
import { highLevelStyles, Theme, useTheme } from '@smartb/g2-themes'
import clsx from 'clsx'
import { Channel, SSMIcon, User, TransactionIcon } from 'components'
import { useTranslation } from "react-i18next"

const useStyles = highLevelStyles<Theme>()({
    ticket: {
        margin: "10px"
    },
    icon: {
        width: "40px",
        height: "40px",
        color: theme => theme.colors.primary
    },
    checkIcon: {
        fill: "none",
        stroke: theme => theme.colors.primary
    }
})

export const CardsHeader = () => {
    const theme = useTheme()
    const {t} = useTranslation()
    const classes = useStyles(theme)
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" >
            <Ticket
                className={classes.ticket}
                icon={<Channel color={theme.colors.primary} className={classes.icon} />}
                variant="composed"
                title={t("channels")}
                content="3"
            />
            <Ticket
                className={classes.ticket}
                icon={<SSMIcon color={theme.colors.primary} className={classes.icon} />}
                variant="composed"
                title={t("protocols")}
                content="2"
            />
            <Ticket
                className={classes.ticket}
                icon={<CheckCircleRounded className={clsx(classes.icon, classes.checkIcon)} />}
                variant="composed"
                title={t("dashboardPage.assetsValidated")}
                content="1245"
            />
            <Ticket
                className={classes.ticket}
                icon={<User color={theme.colors.primary} className={classes.icon} />}
                variant="composed"
                title={t("users")}
                content="89"
            />
            <Ticket
                className={classes.ticket}
                icon={<TransactionIcon color={theme.colors.primary} className={classes.icon} />}
                variant="composed"
                title={t("transactions")}
                content="12435"
            />
        </Box>
    )
}
