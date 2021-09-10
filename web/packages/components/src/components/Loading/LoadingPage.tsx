
import {X2Icon} from "../../icons"
import {Loading} from '@smartb/g2-components'
import { midLevelStyles } from "@smartb/g2-themes"

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
