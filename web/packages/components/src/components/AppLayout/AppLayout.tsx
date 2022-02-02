import React, { useCallback, useState } from 'react'
import { AppLayout as AruiAppLayout } from '@smartb/g2-layout'
import { MenuItem } from '@smartb/g2-components'
import {  makeG2STyles } from '@smartb/g2-themes'
import { appLayoutStyleProps } from '../../theme'
import {X2Menu} from './X2Menu'
import { AppBarContent } from './AppBarContent'

const useStyles = makeG2STyles()(
  (theme) => ({
    drawer: {
        "& .MuiDrawer-paper": {
            background: theme.colors.secondary,
            border: "none"
        }
    },
    main: {
        background: theme.colors.tertiary,
        minHeight: "100vh",
        boxSizing: "border-box"
    },
    appBar: {
        background: "white",
    },
    toolBar: {
        minHeight: "100%"
    }
}))

interface AppLayoutProps {
    children?: React.ReactNode
    title: string
    menu: MenuItem[]
}

export const AppLayout = (props: AppLayoutProps) => {
    const { children, title, menu } = props
    const [open, setOpen] = useState(window.innerWidth > 750)
    
    const { classes } = useStyles()
    const onToggle = useCallback(
        () => setOpen(prevOpen => !prevOpen),
        [],
    )
    return (
        <AruiAppLayout
            open={open}
            onToggle={onToggle}
            styleProps={appLayoutStyleProps}
            drawerProps={{
                className: classes.drawer
            }}
            classes={{main: classes.main}}
            showAppBar
            drawerContent={<X2Menu menu={menu}/>}
            appBarLayoutProps={{className: classes.appBar, classes: {
                toolBar: classes.toolBar
            }}}
            appBarContent={<AppBarContent title={title} />}
        >
            {children}
        </AruiAppLayout>
    )
}

