import React, { useCallback, useState } from 'react'
import { App, MenuItem } from '@smartb/archetypes-ui-layout'
import { Theme, useTheme } from '@smartb/archetypes-ui-components'
import { appLayoutStyleProps, midLevelStyles } from '../../theme'
import {X2Menu} from './X2Menu'

const useStyles = (theme: Theme) => midLevelStyles({
    drawer: {
        "& .MuiDrawer-paper": {
            background:'#353945',
            border: "none"
        }
    },
    main: {
        background: theme.hex.tertiaryColor,
        height: "100vh",
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
        <App
            open={open}
            onToggle={onToggle}
            logo=""
            styleProps={appLayoutStyleProps}
            drawerMenuProps={{
                classes: {drawer: classes.drawer}
            }}
            classes={{main: classes.main}}
            showAppBar={false}
            drawerContent={<X2Menu menu={menu}/>}
            title={title}
        >
            {children}
        </App>
    )
}

