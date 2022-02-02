import { Box, InputLabel } from '@mui/material'
import { Button } from '@smartb/g2-components'
import { makeG2STyles } from '@smartb/g2-themes'
import { ChangeEvent, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const useStyles = makeG2STyles()(
  (theme) => ({
    descriptionContainer: {
        display: "inline-flex",
        margin: "10px 0px"
    },
    generateButton: {
        marginLeft: "5px",
        background: theme.colors.secondary,
        padding: "4px 7px",
        "&:hover": {
            background: theme.colors.secondary,
        }
    }
}))

interface GenerateButtonProps {
    canGenerate?: boolean
    onClickGenerate: () => void
}

export const GenerateButton = (props: GenerateButtonProps) => {
    const {onClickGenerate, canGenerate = false} = props
    const {t} = useTranslation()
    
    const { classes } = useStyles()
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
