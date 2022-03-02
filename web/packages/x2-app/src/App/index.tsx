import {MenuItem, MenuItems} from "@smartb/g2-components";
import {AppLayout} from "components";
import {useEffect, useMemo} from "react";
import {TFunction, useTranslation} from "react-i18next";
import {Link, LinkProps, useLocation} from "react-router-dom";
import {Protocol, ProtocolName} from "ssm";
import {AppRouter} from "./routes";
import withConnect from "./withConnect";

interface AppProps {
  title: string
  protocols: Map<ProtocolName, Protocol>
}

const App = (props: AppProps) => {
  const { title, protocols } = props
  const { t } = useTranslation()
  const location = useLocation()
  const menu = useMenu(t, protocols, location.pathname)

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


const useMenu = (t: TFunction, protocols: Map<ProtocolName, Protocol>, path: string) => {
  return useMemo(() => getMenu(t, protocols, path), [protocols, path])
}

const getMenu = (t: TFunction, protocols: Map<ProtocolName, Protocol>, path: string): MenuItems<LinkProps>[] => {
  const protocolName = path.split("/")[1]
  const protocolsList: MenuItem<LinkProps>[] = Array.from(protocols.values()).map((protocol) => {
      return ({
        key: `appLayout-protocols-${protocol.name}`,
        label: protocol.name,
        component: Link,
        componentProps: {
          to: `/${protocol.name}/sessions`
        },
        isSelected: protocol.name === protocolName
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
    isSelected: protocolName.trim() !== "" && protocolName !== undefined
  }]
  return menu
}
