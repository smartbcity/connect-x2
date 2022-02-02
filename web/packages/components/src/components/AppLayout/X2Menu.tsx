import {  ListItem, ListItemIcon } from '@mui/material'
import { X2Icon } from '../../icons'
import { Menu, MenuItems } from '@smartb/g2-components'
import { midLevelStyles } from "@smartb/g2-themes"
import { Link } from "react-router-dom";

const useStyles = midLevelStyles()({
    icon: {
        width: "140px"
    },
    list: {
        padding: "0",
        "& span": {
            color: "white"
        },
        "& .MuiListItemIcon-root": {
            minWidth: "unset"
        }
    }
})

interface X2MenuProps {
    menu: MenuItems[]
}

export const X2Menu = (props: X2MenuProps) => {
    const { menu } = props
    const classes = useStyles()
    return (
        <>
            <ListItem
                button
                component={Link}
                to={"/"}
            >
                <ListItemIcon><X2Icon firstColor="white" className={classes.icon} /></ListItemIcon>
            </ListItem>
            <Menu className={classes.list} menu={menu} />
        </>
    )
}
