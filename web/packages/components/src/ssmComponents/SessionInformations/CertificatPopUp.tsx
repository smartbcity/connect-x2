import { PopUp, PopUpAction } from '@smartb/archetypes-ui-components'
import { midLevelStyles } from '@smartb/archetypes-ui-themes'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Document, Page, pdfjs } from "react-pdf";
import { Session, SSMRequester } from 'ssm';
import { useAsyncResponse } from 'utils';
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
    currentSession: Session
}

export const CertificatPopUp = (props: CertificatPopUp) => {
    const { onClose, open, currentSession } = props
    const { t } = useTranslation()
    const [pageNumber] = useState<number>(1);
    const classes = useStyles()

    const fetchPdf = useCallback(
        async () => {
            return SSMRequester.generateCertificatePdf({
                lang: "EN", certificate: {
                    context: [
                        "https://www.smartb.city/credentials/certificate/v1"
                    ],
                    type: [
                        "CertificateCredentials"
                    ],
                    id: currentSession.id,
                    title: {
                        value: {
                            EN: "Very Important Certificate"
                        },
                        label: {},
                        unit: {}
                    },
                    holder: {
                        name: {
                            value: {
                                EN: "Elie Jible"
                            },
                            label: {},
                            unit: {}
                        },
                        organization: "GreenGuys",
                        roles: "CEO",
                        signature: "https://picture.com/greenguys/green-signature"
                    },
                    issuer: {
                        name: {
                            value: {
                                EN: "Jeanne Alyztou"
                            },
                            label: {},
                            unit: {}
                        },
                        organization: "SmartB",
                        roles: "CEO",
                        signature: "https://picture.com/smartb/pretty-signature"
                    },
                    protocol: {
                        validationProtocol: {
                            value: {
                                EN: "ExampleSSM"
                            },
                            label: {
                                EN: "Validation Protocol"
                            },
                            unit: {}
                        },
                        protocolEngineVersion: {
                            value: {
                                EN: "sb-chaincode"
                            },
                            label: {
                                EN: "Protocol Engine Version"
                            },
                            unit: {}
                        },
                        channel: {
                            value: {
                                EN: "ssm-channel"
                            },
                            label: {
                                EN: "Channel"
                            },
                            unit: {}
                        },
                        session: {
                            value: {
                                EN: "session-14602958-9599-4a50-9b3c-aac4615942e3"
                            },
                            label: {
                                EN: "Session Number"
                            },
                            unit: {}
                        },
                        additionals: [],
                        url: "https://x2.smartb.city/ExampleSSM/ssm-channel/sb-chaincode/session-14602958-9599-4a50-9b3c-aac4615942e3"
                    },
                    payload: [
                        {
                            value: {
                                EN: "0"
                            },
                            label: {
                                EN: "Amount of CO2 saved"
                            },
                            unit: {
                                EN: "kt"
                            }
                        }
                    ]
                }
            })
        },
        [currentSession],
    )
    const { result } = useAsyncResponse(fetchPdf)

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
                a.download = currentSession.id + ' certificate'
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                window.URL.revokeObjectURL(url)
            }
        },
        [result, currentSession],
    )


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
            className={classes.popUpRoot}
            classes={{ content: classes.content, actions: classes.actions, closeIcon: classes.closeIcon, button: classes.action }}
        >
            <Document
                file={"data:application/pdf;base64," + result}
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