import { Box, Typography } from "@material-ui/core"
import { Theme, useTheme, midLevelStyles } from "@smartb/g2-themes"
import { LanguageSelector } from "./LanguageSelector"

const useStyles = midLevelStyles<Theme>()({
    underline: {
        width: "80%",
        background: theme => theme.colors.primary,
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
})

interface AppBarContentProps {
    title: string
}

export const AppBarContent = (props: AppBarContentProps) => {
    const {title} = props 
    const theme = useTheme()
    const classes = useStyles(theme)
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

