import { Table, Column } from '@smartb/archetypes-ui-components'
import { Box, Typography } from '@material-ui/core'
import { useTranslation, TFunction } from 'react-i18next'
import { useCallback, useMemo, useState } from 'react'
import { highLevelStyles } from '@smartb/archetypes-ui-themes'
import { Session, SSM } from 'ssm'
import { LoadingComponent } from 'components'

const useStyles = highLevelStyles()({
    container: {
        '& .rdt_TableRow .rdt_TableCell:last-child': {
            minWidth: '450px',
            maxWidth: '450px'
        },
        '& .rdt_TableCol:last-child': {
            minWidth: '450px',
            maxWidth: '450px',
            "& > div": {
                width: "100%",
                "& > div": {
                    width: "100%"
                }
            }
        },
        '& .rdt_TableRow .rdt_TableCell:first-child': {
            minWidth: '200px'
        },
        '& .rdt_TableCol:first-child': {
            minWidth: '200px'
        }
    }
})

interface SessionColumn {
    id: string
    creationDate: string
    channel: string
    protocolEngine: string
    completedStep: {
        date: string,
        status: number,
        user: string
    }
}

interface SessionTableProps {
    sessions?: Session[]
    isLoading?: boolean
    currentSSM: SSM
    gotoSessionDetails: (ssmName: string, sessionName: any) => void
}

export const SessionTable = (props: SessionTableProps) => {
    const { sessions, currentSSM, gotoSessionDetails, isLoading = false } = props
    const { t } = useTranslation()
    const [page, setPage] = useState(1)
    const classes = useStyles()
    const data: SessionColumn[] = useMemo(() => {
        if (!sessions) return []
        return sessions.map((session): SessionColumn => ({
            id: session.id,
            creationDate: new Date(session.creationDate).toLocaleDateString(),
            channel: session.channel,
            protocolEngine: currentSSM?.name,
            completedStep: {
                date: new Date(session.lastTransaction.date).toLocaleDateString(),
                status: session.lastTransaction.to,
                user: session.lastTransaction.signer.name,
            }
        }))
    }, [sessions, currentSSM])

    const pagination: { totalPage: number, pageData: SessionColumn[] } = useMemo(() => {
        const pageData = data.slice((page - 1) * 10, ((page - 1) * 10) + 10)
        return {
            pageData: pageData,
            totalPage: Math.floor(data.length / 10)
        }
    }, [page, data])
    
    const handlePageChange = useCallback(
        (page: number) => setPage(page),
        [],
    )

    const onRowClicked = useCallback(
        (row: SessionColumn) => gotoSessionDetails(row.protocolEngine, row.id),
        [gotoSessionDetails],
    )

    const columns: Column<SessionColumn>[] = useMemo(() => getColumns(t), [])

    return (
        <Table<SessionColumn>
            data={pagination.pageData}
            columns={columns}
            isLoading={isLoading}
            page={page}
            totalPages={pagination.totalPage}
            handlePageChange={handlePageChange}
            loadingComponent={<Box marginTop="30px"><LoadingComponent /></Box>}
            className={classes.container}
            onRowClicked={onRowClicked}
        />
    )
}

const getColumns = (t: TFunction): Column<SessionColumn>[] => ([{
    name: <Typography variant="body1">{t("sessionId")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2" data-tag='___react-data-table-allow-propagation___'>{row.id}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("creationDate")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2" data-tag='___react-data-table-allow-propagation___'>{row.creationDate}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("channel")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2" data-tag='___react-data-table-allow-propagation___'>{row.channel}</Typography>
    )
}, {
    name: <Typography variant="body1">{t("protocolEngine")}</Typography>,
    cell: (row: SessionColumn) => (
        <Typography variant="body2" data-tag='___react-data-table-allow-propagation___'>{row.protocolEngine}</Typography>
    )
}, {
    name: (
        <Box display="flex" flexDirection="column" width="100%">
            <Typography variant="body1" align="center">{t("sessionsPage.completedStep")}</Typography>
            <Box display="flex" justifyContent="space-between" width="100%" >
                <Typography variant="body2" >{t("date")}</Typography>
                <Typography variant="body2">{t("status")}</Typography>
                <Typography variant="body2">{t("user")}</Typography>
            </Box>
        </Box>
    ),
    cell: (row: SessionColumn) => (
        <Box display="flex" justifyContent="space-between" width="100%" data-tag='___react-data-table-allow-propagation___'>
            <Typography variant="body2" data-tag='___react-data-table-allow-propagation___'>{row.completedStep.date}</Typography>
            <Typography variant="body2" data-tag='___react-data-table-allow-propagation___'>{row.completedStep.status}</Typography>
            <Typography variant="body2" data-tag='___react-data-table-allow-propagation___'>{row.completedStep.user}</Typography>
        </Box>
    )
}])
