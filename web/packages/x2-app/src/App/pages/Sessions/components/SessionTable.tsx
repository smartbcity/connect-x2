import { Table, Column } from '@smartb/archetypes-ui-components'
import { Box, Typography } from '@material-ui/core'
import { useTranslation, TFunction } from 'react-i18next'
import { useCallback, useMemo, useState } from 'react'
import { highLevelStyles } from 'utils'
import { SSM } from 'ssm'

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

interface SessionColumn {
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

interface SessionTableProps {
    currentSSM?: SSM
}

export const SessionTable = (props: SessionTableProps) => {
    const { currentSSM } = props
    const { t } = useTranslation()
    const [page, setPage] = useState(1)
    const classes = useStyles()
    const data: SessionColumn[] = useMemo(() => {
        if (!currentSSM || currentSSM.sessions.length === 0) return []
        return currentSSM.sessions.map((session): SessionColumn => ({
            id: session.session,
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
        }))
    }, [currentSSM])

    const pagination: {totalPage: number, pageData: SessionColumn[]} = useMemo(() => {
        const pageData = data.splice((page - 1) * 10, ((page - 1) * 10) + 10)
        return {
            pageData: pageData,
            totalPage: data.length/10
        }
    }, [page, data])

    const handlePageChange = useCallback(
        (page: number) => setPage(page),
        [setPage],
    )

    const columns: Column<SessionColumn>[] = useMemo(() => getColumns(t), [])

    return (
        <Table<SessionColumn>
            data={pagination.pageData}
            columns={columns}
            page={page}
            totalPages={pagination.totalPage}
            handlePageChange={handlePageChange}
            className={classes.container}
        />
    )
}

const getColumns = (t: TFunction): Column<SessionColumn>[] => ([{
    name: <Typography variant="body1">{t("sessionsPage.sessionId")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2">{row.id}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.creationDate")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2">{row.creationDate}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.channel")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2">{row.channel}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.protocolEngine")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2">{row.protocolEngine}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.validationProtocol")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2">{row.validationProtocol}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("sessionsPage.transactionId")}</Typography>,
    cell: (row: SessionColumn) => (
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
    cell: (row: SessionColumn) => (
        <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="body2">{row.completedStep.date}</Typography>
            <Typography variant="body2">{row.completedStep.status}</Typography>
            <Typography variant="body2">{row.completedStep.user}</Typography>
        </Box>
    )
}])
