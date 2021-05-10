import { Box, Typography } from "@material-ui/core"
import { Theme, useTheme, midLevelStyles } from "@smartb/archetypes-ui-themes"

const useStyles = midLevelStyles<Theme>()({
    underline: {
        width: "80%",
        background: theme => theme.colors.primary,
        height: "2px"
    },
    title: {
        fontWeight: 600
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
        </Box>
    )
}

