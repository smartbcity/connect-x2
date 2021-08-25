import { Box, Typography } from "@material-ui/core";
import { TimeLineCell } from "@smartb/archetypes-ui-components";
import { SessionState } from "ssm";
import { GenerateButton } from "../generateCertificate";
import { TransactionDetails } from "../TransactionDetails";

export const toTimeLineCells = (sessionStates: SessionState[], canGenerateCertificates: boolean[], onClickGenerate: (sessionState: SessionState) => void, embed: boolean = false) => {
    return sessionStates.map((sessionState, index): TimeLineCell => {
        const init = sessionState.details?.origin?.role === undefined && sessionState.details?.origin?.action === undefined
        return embed ? toTimeLineCellEmbed(sessionState, index, init, onClickGenerate, canGenerateCertificates[index]) : toTimeLineCell(sessionState, index, init, onClickGenerate, canGenerateCertificates[index])
    });
}

const toTimeLineCell = (sessionState: SessionState, index: number, init: boolean, onClickGenerate: (sessionState: SessionState) => void, canGenerateCertificate: boolean): TimeLineCell => {
    return {
        id: sessionState.transaction?.transactionId ?? "sessionState n°" + index,
        content: (
            <Box display="flex" flexDirection="column">
                <Typography>
                    {init ? "Initialization" : `${sessionState.details?.origin?.role}: ${sessionState.details?.origin?.action}`}
                </Typography>
                <GenerateButton onClickGenerate={() => onClickGenerate(sessionState)} canGenerate={canGenerateCertificate} />
            </Box>
        ),
        startTime: new Date(sessionState.transaction?.timestamp).toLocaleDateString(),
    };
}

const toTimeLineCellEmbed = (sessionState: SessionState, index: number, init: boolean, onClickGenerate: (sessionState: SessionState) => void, canGenerateCertificate: boolean): TimeLineCell => {
    return {
        id: sessionState.transaction?.transactionId ?? "sessionState n°" + index,
        content: (
            <Box display="flex" flexDirection="column">
                <Typography>
                    {init ? "Initialization" : `${sessionState.details?.origin?.role}: ${sessionState.details?.origin?.action}`}
                </Typography>
                <TransactionDetails transaction={sessionState} minified shortVersion/>
                <GenerateButton onClickGenerate={() => onClickGenerate(sessionState)} canGenerate={canGenerateCertificate} />
            </Box>
        ),
        startTime: new Date(sessionState.transaction?.timestamp).toLocaleDateString(),
    };
}