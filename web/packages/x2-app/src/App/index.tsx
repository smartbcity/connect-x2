import { Menu, MenuItem } from "@smartb/archetypes-ui-layout";
import { AppLayout } from "components";
import { useEffect, useMemo } from "react";
import { useTranslation, TFunction } from "react-i18next";
import { LinkProps, Link, useLocation } from "react-router-dom";
import { SSM } from "ssm";
import { AppRouter } from "./routes";
import withConnect from "./withConnect";

interface AppProps {
  title: string
  ssmList: Map<string, SSM>
}

const App = (props: AppProps) => {
  const { title, ssmList } = props
  const { t } = useTranslation()
  const location = useLocation()
  const menu = useMenu(t, ssmList, location.pathname)

  useEffect(() => {
    if (title !== "X2") {
      document.title = `${title} - X2`
    }
  }, [title])

  return (
    <AppLayout title={title} menu={menu}>
      <AppRouter />
    </AppLayout>
  );
}

export default withConnect(App);


const useMenu = (t: TFunction, ssmList: Map<string, SSM>, path: string) => {
  return useMemo(() => getMenu(t, ssmList, path), [ssmList, path])
}

const getMenu = (t: TFunction, ssmList: Map<string, SSM>, path: string): Menu<LinkProps>[] => {
  const ssmName = path.split("/")[1]
  const protocolsList: MenuItem<LinkProps>[] = Array.from(ssmList.values()).map((ssm) => ({
    key: `appLayout-protocols-${ssm.ssm.name}`,
    label: ssm.ssm.name,
    component: Link,
    componentProps: {
      to: `/${ssm.ssm.name}/sessions`
    },
    isSelected: ssm.ssm.name === ssmName
  }))
  const menu: Menu<LinkProps>[] = [{
    key: "appLayout-dashboard",
    label: t("dashboard"),
    component: Link,
    componentProps: {
      to: '/'
    },
    isSelected: path === "/"
  },
  {
    key: "appLayout-protocols",
    label: t("protocols") + ":",
    items: protocolsList,
    isSelected: ssmName.trim() !== "" && ssmName !== undefined
  }]
  return menu
}
