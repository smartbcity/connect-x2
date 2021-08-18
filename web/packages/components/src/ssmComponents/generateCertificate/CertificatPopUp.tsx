import { PopUp, PopUpAction } from '@smartb/archetypes-ui-components'
import { midLevelStyles } from '@smartb/archetypes-ui-themes'
import { useCallback, useEffect, /* useEffect, */ useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Document, Page, pdfjs } from "react-pdf";
import { SessionState, SSMRequester } from 'ssm';
import { useAsyncResponse } from 'utils';
import { LoadingComponent } from '../../components/Loading'
import {useExtendedI18n} from "../../i18n"
// import { jsPDF } from "jspdf"
// import html2canvas from "html2canvas"
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
        zIndex: 5
    },
    document: {
        minWidth: "750px",
        minHeight: "530px"
    }
})

interface CertificatPopUp {
    open: boolean
    onClose: () => void
    currentSessionState: SessionState
}

export const CertificatPopUp = (props: CertificatPopUp) => {
    const { onClose, open, currentSessionState } = props
    const { t } = useTranslation()
    const [pageNumber] = useState<number>(1);
    const classes = useStyles()
    const {i18n} = useExtendedI18n()

    // const [state, setstate] = useState<HTMLDivElement | null>(null)

    const fetchPdf = useCallback(
        async () => {
            return SSMRequester.generateCertificateFromSessionState({lang: i18n.language, sessionState: currentSessionState.details})
            },
        [currentSessionState, i18n.language],
    )
    const { result, execute, status } = useAsyncResponse(fetchPdf, false)

    useEffect(() => {
        if (open) execute()
    }, [open])

    const onDownload = useCallback(
        () => {
            if (result) {
                const bs = atob(result)
                const buffer = new ArrayBuffer(bs.length)
                const ba = new Uint8Array(buffer)
                for (var i = 0; i < bs.length; i++) {
                    ba[i] = bs.charCodeAt(i)
                }
                const blob = new Blob([ba], { type: 'application/pdf' })
                const a = document.createElement('a')
                const url = URL.createObjectURL(blob)
                a.href = url
                a.download = currentSessionState.details.session + ' certificate'
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                window.URL.revokeObjectURL(url)
            }
        },
        [result, currentSessionState],
    )

    // useEffect(() => {
    //     const document = state
    //     if (document) {
    //         setTimeout(() => {
    //             const svg = document.getElementsByTagName('svg:svg')[0] as SVGElement
    //             if (svg) {
    //                 const svgParent = svg.parentElement
    //                 if (svgParent) {
    //                     const doc2 = new jsPDF()
    //                     html2canvas(svgParent).then((canvas) => {
    //                         const image = canvas.toDataURL("image/jpeg")
    //                         doc2.addImage(image, 0, 0, 100, 100)
    //                         doc2.save("svg to image to pdf")
    //                     })
    //                 }
    //             }
    //         }, 500);
    //     }
    // }, [state])



    const actions = useMemo((): PopUpAction[] => [{
        key: "onCancelCertificat",
        label: t('cancel'),
        onClick: onClose,
        variant: "text"
    }, {
        key: "onDownloadCertificat",
        label: t('download'),
        onClick: onDownload
    }], [onDownload, onClose])

    return (
        <PopUp
            onClose={onClose}
            open={open}
            actions={actions}
            id={`${currentSessionState.details.session}-popup`}
            className={classes.popUpRoot}
            classes={{ content: classes.content, actions: classes.actions, closeIcon: classes.closeIcon, button: classes.action }}
        >
           {status !== "SUCCESS" ?
           <LoadingComponent />
           :
           <Document
                file={"data:application/pdf;base64," + result}
                renderMode="svg"
                /* inputRef={setstate} */
                className={classes.document}
                loading={<LoadingComponent />}
            >
                <Page
                    pageNumber={pageNumber}
                    width={750}
                    renderMode="svg"
                    renderAnnotationLayer={false}
                    loading={<LoadingComponent />}
                />
            </Document>}
        </PopUp>
    )
}