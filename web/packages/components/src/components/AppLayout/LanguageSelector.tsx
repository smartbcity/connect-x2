import { InputLabel, Select, SelectChangeEvent, Box } from '@mui/material'
import { makeG2STyles } from '@smartb/g2-themes'
import { useCallback } from 'react'
import { useExtendedI18n, Languages } from '../..'

const useStyles = makeG2STyles()({
    label: {
        marginRight: "5px"
    },
    select: {
        padding: "2px 0px !important",
        paddingRight: "15px !important"
    },
    selectIcon: {
        marginRight: "-8px"
    }
})

export const LanguageSelector = () => {
    const { i18n } = useExtendedI18n()
    const { classes } = useStyles()

    const onLanguageChange = useCallback(
        (event: SelectChangeEvent<"fr" | "en">) => i18n.changeLanguage(event.target.value as keyof Languages),
        [i18n.changeLanguage],
    )

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <InputLabel className={classes.label} htmlFor="X2-languageSelector">lng:</InputLabel>
            <Select variant="standard" color="secondary" classes={{ select: classes.select, icon: classes.selectIcon }} native defaultValue={i18n.language} onChange={onLanguageChange} id="X2-languageSelector">
                <option value="en">en</option>
                <option value="fr">fr</option>
            </Select>
        </Box >
    )
}
