
import {X2Icon} from "../../icons"
import {Loading} from '@smartb/archetypes-ui-components'
import { midLevelStyles } from "@smartb/archetypes-ui-themes"

const useStyles = midLevelStyles()({
    icon: {
        width: "80vw",
        maxWidth: "250px",
        maxHeight: "80vh",
        marginBottom: "20px"
    }
})

export const LoadingPage = () => {
    const classes = useStyles()
    return (
        <Loading icon={<X2Icon className={classes.icon}/>} />
    )
}
