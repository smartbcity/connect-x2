import { PopUp,PopUpAction } from '@smartb/archetypes-ui-components'
import { midLevelStyles } from '@smartb/archetypes-ui-themes'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import pdf from "./certificate-sample.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import { LoadingComponent } from '../../components/Loading'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = midLevelStyles()({
    popUpRoot: {
        "& .MuiPaper-root": {
            maxWidth: "unset"
        }
    },
    content: {
        padding: "20px"
    },
    actions: {
        position: "absolute",
        width: "100%",
        boxSizing: "border-box",
        bottom: "0",
        pointerEvents: "none"
    },
    action: {
        pointerEvents: "all"
    },
    closeIcon: {
        zIndex:5
    },
    document: {
        minWidth: "750px",
        minHeight: "530px"
    }
})

interface CertificatPopUp {
    open: boolean
    onClose: () => void
}

export const CertificatPopUp = (props: CertificatPopUp) => {
    const { onClose, open } = props
    const { t } = useTranslation()
    const [pageNumber] = useState<number>(1);
    const classes = useStyles()

    const onDownload = useCallback(
        () => {
        },
        [],
    )

    const actions = useMemo((): PopUpAction[] => [{
        key: "onCancelCertificat",
        label: t('cancel'),
        onClick: onClose,
        variant: "text"
    },{
        key: "onDownloadCertificat",
        label: t('download'),
        onClick: onDownload
    }], [onDownload, onClose])

    return (
        <PopUp
            onClose={onClose}
            open={open}
            actions={actions}
            className={classes.popUpRoot}
            classes={{content: classes.content, actions: classes.actions, closeIcon: classes.closeIcon, button: classes.action}}
        >
            <Document
                file={"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
                className={classes.document}
                loading={<LoadingComponent />}
            >
                <Page
                    pageNumber={pageNumber}
                    width={750}
                    renderMode="canvas"
                    renderAnnotationLayer={false}
                    loading={<LoadingComponent />}
                />
            </Document>
        </PopUp>
    )
}
