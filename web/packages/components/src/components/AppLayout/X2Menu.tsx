import {  ListItem, ListItemIcon } from '@material-ui/core'
import { X2Icon } from '../../icons'
import { midLevelStyles } from 'utils'
import { MenuItem, MenuContainer } from '@smartb/archetypes-ui-layout'
import { Link } from "react-router-dom";

const useStyles = midLevelStyles({
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
    menu: MenuItem[]
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
            <MenuContainer className={classes.list} menu={menu} />
        </>
    )
}
