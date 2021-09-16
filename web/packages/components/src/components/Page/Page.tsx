import {Page as AruiPage} from "@smartb/g2-layout"
import React, { useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
import { midLevelStyles } from "@smartb/g2-themes"

const useStyles = midLevelStyles()({
    header: {
        top: "5px",
        zIndex: 0,
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center"
    },
    page: {
        paddingTop:"0px",
        paddingBottom: "40px"
    }
})

interface PageProps {
    children?: React.ReactNode
    title: string
    setTitle: (title: string) => void
    headerContent?: React.ReactNode
}

export const Page = (props: PageProps) => {
    const {children, setTitle, title, headerContent} = props
    const {t} = useTranslation()
    const history = useHistory()
    const classes = useStyles()
    useEffect(() => {
        setTitle(title)
    }, [title, setTitle])

    const onGoBackClick = useCallback(
        () => history.goBack(),
        [history],
    )
    
    return (
        <AruiPage
            goBackLabel={t("back")}
            onGoBackClick={onGoBackClick}
            headerContent={headerContent}
            fixedHeader
            className={classes.page}
            classes={{header: classes.header, backButton: ""}}
        >
            {children}
        </AruiPage>
    )
}
