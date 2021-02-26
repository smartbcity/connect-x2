import { AppLayout } from "components";
import { useEffect } from "react";
import {useTranslation } from "react-i18next";
import { useMenu } from "utils";
import { AppRouter } from "./routes";
import withConnect from "./withConnect";

interface AppProps {
    title: string
}

const App = (props: AppProps) => {
    const { title } = props
    const {t} = useTranslation()
    const menu = useMenu(t)

    useEffect(() => {
        if (title !== "X2") {
            document.title = `${title} - X2`
        }
    }, [title])

  return (
    <AppLayout title={title} menu={menu}>
        <AppRouter/>
    </AppLayout>
  );
}

export default withConnect(App);
