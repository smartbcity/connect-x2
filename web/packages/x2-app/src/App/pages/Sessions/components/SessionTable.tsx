import { Table, Column } from '@smartb/archetypes-ui-components'
import { Box, Typography } from '@material-ui/core'
import { useTranslation, TFunction } from 'react-i18next'
import { useCallback, useMemo, useState } from 'react'
import { highLevelStyles } from 'components'

const useStyles = highLevelStyles({
    container: {
      '& .rdt_TableRow .rdt_TableCell:last-child': {
        minWidth: '300px',
        maxWidth: '300px'
      },
      '& .rdt_TableCol:last-child': {
        minWidth: '300px',
        maxWidth: '300px',
        "& > div": {
            width: "100%",
            "& > div": {
                width: "100%"
            }
        }
      }
    }
  })

interface Session {
    id: string
    creationDate: string
    channel: string
    protocolEngine: string
    validationProtocol: string
    transactionId: string
    completedStep: {
        date: string,
        status: string,
        user: string
    }
}

export const SessionTable = () => {
    const { t } = useTranslation()
    const [page, setPage] = useState(1)
    const classes = useStyles()
    const data: Session = {
        id: "1",
        creationDate: "01/02/2020",
        channel: "Angers territory",
        protocolEngine: "SSM Yper",
        validationProtocol: "Delivery 2.0",
        transactionId: "T23425",
        completedStep: {
            date: "25/02/2020",
            status: "finished",
            user: "lorum Blum",
        }
    }

    const handlePageChange = useCallback(
        (page: number) => setPage(page),
        [setPage],
    )

    const columns: Column<Session>[] = useMemo(() => getColumns(t), [])
    return (
        <Table<Session>
            data={[{ ...data }, { ...data, id: "2" }, { ...data, id: "3" }]}
            columns={columns}
            page={page}
            totalPages={10}
            handlePageChange={handlePageChange}
            className={classes.container}
        />
    )
}

const getColumns = (t: TFunction<string>): Column<Session>[] => ([{
    name: <Typography variant="body1">{t("sessionsPage.sessionId")}</Typography>,
    cell: (row: Session) => (
        <Typography variant="body2">{row.id}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.creationDate")}</Typography>,
    cell: (row: Session) => (
        <Typography variant="body2">{row.creationDate}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.channel")}</Typography>,
    cell: (row: Session) => (
        <Typography variant="body2">{row.channel}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.protocolEngine")}</Typography>,
    cell: (row: Session) => (
        <Typography variant="body2">{row.protocolEngine}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.validationProtocol")}</Typography>,
    cell: (row: Session) => (
        <Typography variant="body2">{row.validationProtocol}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.transactionId")}</Typography>,
    cell: (row: Session) => (
        <Typography variant="body2">{row.transactionId}</Typography>
    )
}, {
    name: (
        <Box display="flex" flexDirection="column" width="100%">
            <Typography variant="body1" align="center">{t("sessionsPage.completedStep")}</Typography>
            <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="body2">{t("date")}</Typography>
                <Typography variant="body2">{t("status")}</Typography>
                <Typography variant="body2">{t("user")}</Typography>
            </Box>
        </Box>
    ),
    cell: (row: Session) => (
        <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="body2">{row.completedStep.date}</Typography>
            <Typography variant="body2">{row.completedStep.status}</Typography>
            <Typography variant="body2">{row.completedStep.user}</Typography>
        </Box>
    )
}])
