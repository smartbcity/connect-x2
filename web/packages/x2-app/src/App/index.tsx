import { MenuItem } from "@smartb/archetypes-ui-layout";
import { AppLayout } from "components";
import { useTranslation } from "react-i18next";


const App = () => {
    const {t} = useTranslation()
    const menu: MenuItem[] = [{
        key: "appLayout-dashboard",
        label: t("Dashboard"),
        href: "/",
    },
    {
        key: "appLayout-sessions",
        label: t("Sessions"),
        href: "/sessions",
    },
    {
        key: "appLayout-details",
        label: t("Details"),
        href: "/details",
    }]

  return (
    <AppLayout title="Dashboard" menu={menu}>

    </AppLayout>
  );
}

export default App;