import {CellProps, Column, Row, Table} from '@smartb/g2-layout'
import {Box, Typography} from '@mui/material'
import {TFunction, useTranslation} from 'react-i18next'
import {useCallback, useMemo, useState} from 'react'
import {makeG2STyles} from '@smartb/g2-themes'
import {ProtocolName, Session} from 'ssm'
import {GotoSessionDetails} from "../../../../store/router/router.goto";

const useStyles = makeG2STyles()({
    container: {
        '& .rdt_TableRow .rdt_TableCell:last-of-type': {
            minWidth: '450px',
            maxWidth: '450px'
        },
        '& .rdt_TableCol:last-of-type': {
            minWidth: '450px',
            maxWidth: '450px',
            "& > div": {
                width: "100%",
                "& > div": {
                    width: "100%"
                }
            }
        },
        '& .rdt_TableRow .rdt_TableCell:first-of-type': {
            minWidth: '200px'
        },
        '& .rdt_TableCol:first-of-type': {
            minWidth: '200px'
        }
    }
})

interface SessionColumn {
    id: string
    ssmUri: string
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
    protocolName: ProtocolName,
    sessions?: Session[]
    isLoading?: boolean
    gotoSessionDetails: GotoSessionDetails
}

export const SessionTable = (props: SessionTableProps) => {
    const {_, sessions, gotoSessionDetails, isLoading = false} = props
    const {t} = useTranslation()
    const [page, setPage] = useState(1)
    const {classes} = useStyles()
    const data: SessionColumn[] = useMemo(() => {
        if (!sessions) return []
        return sessions.map((session): SessionColumn => ({
            id: session.sessionName,
            ssmUri: session.ssmUri.uri,
            creationDate: new Date(session.transaction?.timestamp).toLocaleDateString(),
            channel: session.channel.id,
            protocolEngine: session.state.details.ssm as string,
            completedStep: {
                date: new Date(session.transaction?.timestamp).toLocaleDateString(),
                status: session.state.details.current,
                user: session.state.transaction?.creator.mspid ?? ""
            }
        }))
    }, [sessions])

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
        (row: Row<SessionColumn>) => gotoSessionDetails({uri: row.original.ssmUri}, row.id),
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
            // loadingComponent={<Box marginTop="30px"><LoadingComponent /></Box>}
            className={classes.container}
            onRowClicked={onRowClicked}

        />
    )
}

const getColumns = (t: TFunction): Column<SessionColumn>[] => ([{
    Header: `${t("sessionId")}`,
    Cell: ({row}: CellProps<SessionColumn>) => (
        <Typography variant="body2" data-tag='___react-data-table-allow-propagation___'>{row.original.id}</Typography>
    )
}, {
    Header: `${t("creationDate")}`,
    Cell: ({row}: CellProps<SessionColumn>) => (
        <Typography variant="body2"
                    data-tag='___react-data-table-allow-propagation___'>{row.original.creationDate}</Typography>
    )
}, {
    Header: `${t("channel")}`,
    Cell: ({row}: CellProps<SessionColumn>) => (
        <Typography variant="body2"
                    data-tag='___react-data-table-allow-propagation___'>{row.original.channel}</Typography>
    )
}, {
    Header: `${t("protocolEngine")}`,
    Cell: ({row}: CellProps<SessionColumn>) => (
        <Typography variant="body2"
                    data-tag='___react-data-table-allow-propagation___'>{row.original.protocolEngine}</Typography>
    )
}, {
    id: "completedStep",
    Header: (<Box display="flex" flexDirection="column" width="100%">
        <Typography variant="body1" align="center">{t("sessionsPage.completedStep")}</Typography>
        <Box display="flex" justifyContent="space-between" width="100%" >
            <Typography variant="body2" >{t("date")}</Typography>
            <Typography variant="body2">{t("status")}</Typography>
            <Typography variant="body2">{t("user")}</Typography>
        </Box>
    </Box>),
    Cell: ({row}: CellProps<SessionColumn>) => (
        <Box display="flex" justifyContent="space-between" width="100%"
             data-tag='___react-data-table-allow-propagation___'>
            <Typography variant="body2"
                        data-tag='___react-data-table-allow-propagation___'>{row.original.completedStep.date}</Typography>
            <Typography variant="body2"
                        data-tag='___react-data-table-allow-propagation___'>{row.original.completedStep.status}</Typography>
            <Typography variant="body2"
                        data-tag='___react-data-table-allow-propagation___'>{row.original.completedStep.user}</Typography>
        </Box>
    )
}])

