import React, { useCallback, useState } from 'react'
import { AppLayout as AruiAppLayout, MenuItem } from '@smartb/archetypes-ui-layout'
import { Theme, useTheme, midLevelStyles } from '@smartb/archetypes-ui-themes'
import { appLayoutStyleProps } from '../../theme'
import {X2Menu} from './X2Menu'
import { AppBarContent } from './AppBarContent'

const useStyles = midLevelStyles<Theme>()({
    drawer: {
        "& .MuiDrawer-paper": {
            background: theme => theme.colors.secondary,
            border: "none"
        }
    },
    main: {
        background: theme => theme.colors.tertiary,
        minHeight: "100vh",
        boxSizing: "border-box"
    }
})

interface AppLayoutProps {
    children?: React.ReactNode
    title: string
    menu: MenuItem[]
}

export const AppLayout = (props: AppLayoutProps) => {
    const { children, title, menu } = props
    const [open, setOpen] = useState(window.innerWidth > 750)
    const theme = useTheme()
    const classes = useStyles(theme)
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
            showAppBar={false}
            drawerContent={<X2Menu menu={menu}/>}
            appBarContent={<AppBarContent title={title} />}
        >
            {children}
        </AruiAppLayout>
    )
}

