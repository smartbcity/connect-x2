import { Box } from '@material-ui/core'
import { CheckCircleRounded } from '@material-ui/icons'
import { Ticket } from "@smartb/archetypes-ui-components"
import { highLevelStyles, Theme, useTheme } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import { Channel, SSMIcon, User, TransactionIcon } from 'components'

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
    const classes = useStyles(theme)
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" >
            <Ticket
                className={classes.ticket}
                icon={<Channel color={theme.colors.primary} className={classes.icon} />}
                variant="composed"
                title="Channels"
                content="3"
            />
            <Ticket
                className={classes.ticket}
                icon={<SSMIcon color={theme.colors.primary} className={classes.icon} />}
                variant="composed"
                title="Protocols"
                content="2"
            />
            <Ticket
                className={classes.ticket}
                icon={<CheckCircleRounded className={clsx(classes.icon, classes.checkIcon)} />}
                variant="composed"
                title="Assets Validated"
                content="1245"
            />
            <Ticket
                className={classes.ticket}
                icon={<User color={theme.colors.primary} className={classes.icon} />}
                variant="composed"
                title="Users"
                content="89"
            />
            <Ticket
                className={classes.ticket}
                icon={<TransactionIcon color={theme.colors.primary} className={classes.icon} />}
                variant="composed"
                title="Transactions"
                content="12435"
            />
        </Box>
    )
}
