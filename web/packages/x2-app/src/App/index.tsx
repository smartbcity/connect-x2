import { MenuItem } from "@smartb/archetypes-ui-layout";
import { AppLayout } from "components";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, LinkProps } from "react-router-dom";
import { AppRouter } from "./routes";
import withConnect from "./withConnect";

interface AppProps {
    title: string
}

const App = (props: AppProps) => {
    const { title } = props
    const {t} = useTranslation()
    const menu: MenuItem<LinkProps>[] = [{
        key: "appLayout-dashboard",
        label: t("dashboard"),
        component: Link,
        componentProps: {
            to: '/'
        }
    },
    {
        key: "appLayout-sessions",
        label: t("sessions"),
        component: Link,
        componentProps: {
            to: '/sessions'
        }
    },
    {
        key: "appLayout-details",
        label: t("details"),
        component: Link,
        componentProps: {
            to: '/details'
        }
    }]

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