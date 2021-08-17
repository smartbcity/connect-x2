import { Box, InputLabel } from '@material-ui/core'
import { Button } from '@smartb/archetypes-ui-components'
import { midLevelStyles, Theme, useTheme } from '@smartb/archetypes-ui-themes'
import { useTranslation } from 'react-i18next'

const useStyles = midLevelStyles<Theme>()({
    descriptionContainer: {
        display: "inline-flex",
    },
    generateButton: {
        background: theme => theme.colors.secondary,
        padding: "4px 7px",
        "&:hover": {
            background: theme => theme.colors.secondary,
        }
    }
})

interface GenerateButtonProps {
    canGenerate?: boolean
    onClickGenerate: () => void
}

export const GenerateButton = (props: GenerateButtonProps) => {
    const {onClickGenerate, canGenerate} = props
    const {t} = useTranslation()
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
        <Box className={classes.descriptionContainer}>
            <InputLabel>{t("transactionCertificate")}:</InputLabel>
            <Box display="flex" alignItems="center" height="16px">
                <Button
                    onClick={onClickGenerate}
                    className={classes.generateButton}
                    disabled={!canGenerate}
                    fail={!canGenerate}
                >
                    {t("generate")}
                </Button>
            </Box>
        </Box>
    )
}
