import { PopUp, PopUpAction } from '@smartb/archetypes-ui-components'
import { midLevelStyles } from '@smartb/archetypes-ui-themes'
import { useCallback, useEffect, /* useEffect, */ useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Document, Page, pdfjs } from "react-pdf";
import { SessionState, SSMRequester } from 'ssm';
import { useAsyncResponse } from 'utils';
import { LoadingComponent } from '../../components/Loading'
import { useExtendedI18n } from "../../i18n"
// import pdf from "./certificate.pdf"
// import { jsPDF } from "jspdf"
// import { toJpeg } from "html-to-image"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = midLevelStyles()({
    popUpRoot: {
        "& .MuiPaper-root": {
            maxWidth: "unset",
            minWidth: "790px",
            minHeight: "570px"
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
    const { i18n } = useExtendedI18n()

    // const [state, setstate] = useState<HTMLDivElement | null>(null)

    const fetchPdf = useCallback(
        async () => {
            return SSMRequester.generateCertificateFromSessionState({ lang: 'EN', sessionState: currentSessionState.details })
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



    // const onRender = useCallback(
    //     async () => {
    //         const document = state
    //         if (document) {
    //             const svg = document.getElementsByTagName('svg:svg')[0] as SVGElement
    //             const spans = svg.getElementsByTagName('svg:tspan')

    //             for (var i = 0; i < spans.length; i++) {
    //                 if (spans[i].textContent == "ssm-yper") {
    //                     spans[i].textContent =  "ssm-colisactiv"
    //                     break;
    //                 }
    //             }

    //             if (svg) {
    //                 const svgParent = svg.parentElement
    //                 if (svgParent) {
    //                     const doc2 = new jsPDF({ orientation: "landscape" })
    //                     const image = await toJpeg(svgParent, { canvasWidth: svgParent.offsetWidth, canvasHeight: svgParent.offsetHeight })
    //                     doc2.addImage(image, 0, 0, svgParent.offsetWidth / 2, svgParent.offsetHeight / 2)
    //                     await doc2.html(svgParent, {html2canvas: {svgRendering: true, scale: 0.3, }, x: 0, y:0})
    //                     console.log(svgParent.innerHTML.replaceAll("svg:", "").replace("svg", 'svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink"'))
    //                     doc2.save("html to image to pdf")
    //                     const doc1 = new jsPDF({orientation: "landscape"})
    //                     const svg = svgParent.innerHTML.replaceAll("svg:svg", "svg").replace("svg", 'svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink"')
    //                     doc1.addSvgAsImage(svg, 0, 0, svgParent.offsetWidth, svgParent.offsetHeight)
    //                     doc1.save("svg to pdf")
    //                 }
    //             }
    //         }
    //     },
    //     [state],
    // )



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
                   /*  inputRef={setstate} */
                    loading={<LoadingComponent />}
                >
                    <Page
                        pageNumber={pageNumber}
                        width={750}
                        renderMode="svg"
                        /* onRenderSuccess={onRender} */
                        renderAnnotationLayer={false}
                        loading={<LoadingComponent />}
                    />
                </Document>}
        </PopUp>
    )
}