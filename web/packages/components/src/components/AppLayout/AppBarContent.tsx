import { Box, Typography } from "@mui/material"
import {  makeG2STyles } from "@smartb/g2-themes"
import { LanguageSelector } from "./LanguageSelector"

const useStyles = makeG2STyles()((theme) => ({
    underline: {
        width: "80%",
        background: theme.colors.primary,
        height: "2px"
    },
    title: {
        fontWeight: 600
    },
    rightContainer: {
        position: "fixed",
        top: "15px",
        right: "15px"
    }
}))

interface AppBarContentProps {
    title: string
}

export const AppBarContent = (props: AppBarContentProps) => {
    const {title} = props 
    const { classes } = useStyles()
    return (
        <Box display="flex" flexDirection="column">
            <Typography color="textPrimary" variant="h5" className={classes.title}>{title}</Typography>
            <div className={classes.underline}/>
            <Box className={classes.rightContainer}>
                <LanguageSelector/>
            </Box>
        </Box>
    )
}

