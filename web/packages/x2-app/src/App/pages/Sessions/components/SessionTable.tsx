import { Table, Column } from '@smartb/archetypes-ui-components'
import { Box, Typography } from '@material-ui/core'
import { useTranslation, TFunction } from 'react-i18next'
import { useCallback, useMemo, useState } from 'react'
import { highLevelStyles } from '@smartb/archetypes-ui-themes'
import { SSM } from 'ssm'

const useStyles = highLevelStyles()({
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
    completedStep: {
        date: string,
        status: string,
        user: string
    }
}

interface SessionTableProps {
    currentSSM?: SSM
    gotoSessionDetails: (ssmName: string, sessionName: any) => void
}

export const SessionTable = (props: SessionTableProps) => {
    const { currentSSM, gotoSessionDetails } = props
    const { t } = useTranslation()
    const [page, setPage] = useState(1)
    const classes = useStyles()
    const data: SessionColumn[] = useMemo(() => {
        if (!currentSSM || currentSSM.sessions.length === 0) return []
        return currentSSM.sessions.map((session): SessionColumn => ({
            id: session.session,
            creationDate: "Not yet implemented",
            channel: "Not yet implemented",
            protocolEngine: session.ssm,
            completedStep: {
                date: "Not yet implemented",
                status: session.current.toLocaleString(),
                user: "Not yet implemented",
            }
        }))
    }, [currentSSM])

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
            page={page}
            totalPages={pagination.totalPage}
            handlePageChange={handlePageChange}
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
