
import { Box, LinearProgress } from '@material-ui/core'
import {X2Icon} from "../../icons"
import React from 'react'
import { midLevelStyles } from '../../theme'

const useStyles = midLevelStyles({
    icon: {
        width: "250px",
        marginBottom: "20px"
    }
})

export const LoadingPage = () => {
    const classes = useStyles()
    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100vw" height="100vh">
            <Box display="flex" flexDirection="column">
                <X2Icon className={classes.icon}/>
                <LinearProgress />
            </Box>
        </Box>
    )
}
