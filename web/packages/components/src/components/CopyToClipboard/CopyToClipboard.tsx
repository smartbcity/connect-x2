import {CopyToClipboard as AruiCopyToClipboard, CopyToClipboardProps as AruiCopyToClipboardProps} from '@smartb/g2-components'
import { useTranslation } from 'react-i18next'

export const CopyToClipboard = (props: AruiCopyToClipboardProps) => {
    const {t} = useTranslation()
    return (
        <AruiCopyToClipboard helperText={t("copyToClipboard")} successHelperText={t("copyToClipboardSuccess")} {...props}/>
    )
}
