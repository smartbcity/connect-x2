import { Box, InputLabel } from '@material-ui/core'
import { Button } from '@smartb/archetypes-ui-components'
import { midLevelStyles, Theme, useTheme } from '@smartb/archetypes-ui-themes'
import { ChangeEvent, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const useStyles = midLevelStyles<Theme>()({
    descriptionContainer: {
        display: "inline-flex",
        margin: "10px 0px"
    },
    generateButton: {
        marginLeft: "5px",
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
    const {onClickGenerate, canGenerate = false} = props
    const {t} = useTranslation()
    const theme = useTheme()
    const classes = useStyles(theme)
    const onGenerateMemoized = useCallback(
        (event: ChangeEvent<{}>) => {
            event.stopPropagation()
            onClickGenerate()
        },
        [onClickGenerate],
    )
    if (!canGenerate) return <></>
    return (
        <Box className={classes.descriptionContainer}>
            <InputLabel>{t("transactionCertificate")}:</InputLabel>
            <Box display="flex" alignItems="center" height="16px">
                <Button
                    onClick={onGenerateMemoized}
                    className={classes.generateButton}
                >
                    {t("generate")}
                </Button>
            </Box>
        </Box>
    )
}
