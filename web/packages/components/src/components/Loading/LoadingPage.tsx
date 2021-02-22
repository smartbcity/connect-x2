
import { Box, LinearProgress } from '@material-ui/core'
import {X2Icon} from "../../icons"
import React from 'react'

export const LoadingPage = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100vw" height="100vh">
            <Box display="flex" flexDirection="column">
                <X2Icon/>
                <LinearProgress />
            </Box>
        </Box>
    )
}
