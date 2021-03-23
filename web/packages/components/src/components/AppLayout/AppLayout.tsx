import React, { useCallback, useState } from 'react'
import { AppLayout as AruiAppLayout, MenuItem } from '@smartb/archetypes-ui-layout'
import { Theme, useTheme } from '@smartb/archetypes-ui-components'
import { appLayoutStyleProps } from '../../theme'
import {X2Menu} from './X2Menu'
import { AppBarContent } from './AppBarContent'
import { midLevelStyles } from 'utils'

const useStyles = (theme: Theme) => midLevelStyles({
    drawer: {
        "& .MuiDrawer-paper": {
            background:'#353945',
            border: "none"
        }
    },
    main: {
        background: theme.tertiaryColor,
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
    const classes = useStyles(theme)()
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

