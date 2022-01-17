import { MenuItems, MenuItem } from "@smartb/g2-components";
import { AppLayout } from "components";
import { useEffect, useMemo } from "react";
import { useTranslation, TFunction } from "react-i18next";
import { LinkProps, Link, useLocation } from "react-router-dom";
import {burst, SSM, SsmPath} from "ssm";
import { AppRouter } from "./routes";
import withConnect from "./withConnect";

interface AppProps {
  title: string
  ssmList: Map<SsmPath, SSM>
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


const useMenu = (t: TFunction, ssmList: Map<SsmPath, SSM>, path: string) => {
  return useMemo(() => getMenu(t, ssmList, path), [ssmList, path])
}

const getMenu = (t: TFunction, ssmList: Map<SsmPath, SSM>, path: string): MenuItems<LinkProps>[] => {
  const ssmName = path.split("/")[1]
  const protocolsList: MenuItem<LinkProps>[] = Array.from(ssmList.values()).map((ssm) => {
      const uri = burst(ssm.uri)
      return ({
        key: `appLayout-protocols-${ssm.ssm.name}`,
        label: ssm.ssm.name,
        component: Link,
        componentProps: {
          to: `/${uri.channelId}/${uri.chaincodeId}/${uri.ssmName}/sessions`
        },
        isSelected: ssm.ssm.name === ssmName
      })
  })
  const menu: MenuItems<LinkProps>[] = [{
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
