import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { X2Icon } from '../../icons'
import React from 'react'
import { midLevelStyles } from '../../theme'
import { MenuItem } from '@smartb/archetypes-ui-layout'

const useStyles = midLevelStyles({
    icon: {
        width: "100px",
        marginBottom: "20px"
    },
    listItem: {
        "& span": {
            color: "white"
        }
    },
    list: {
        padding: "0"
    }
})

interface X2MenuProps {
    menu: MenuItem[]
}

export const X2Menu = (props: X2MenuProps) => {
    const { menu } = props
    const classes = useStyles()
    return (
        <List className={classes.list}>
            <ListItem
                button
                component={'a'}
                href={"/"}
            >
                <ListItemIcon><X2Icon firstColor="white" className={classes.icon}/></ListItemIcon>
            </ListItem>
            {menu.map((item) => (
                <ListItem
                    button
                    component={item.href ? 'a' : 'div'}
                    key={item.key}
                    onClick={() => item.goto && !item.href && item.goto()}
                    href={item.href}
                >
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    {item.label && <ListItemText className={classes.listItem} color="inherit" primary={item.label} />}
                </ListItem>
            ))}
        </List>
    )
}
