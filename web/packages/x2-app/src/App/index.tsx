import { MenuItem } from "@smartb/archetypes-ui-layout";
import { AppLayout } from "components";
import { useTranslation } from "react-i18next";
import { AppRouter } from "./routes";


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
        <AppRouter/>
    </AppLayout>
  );
}

export default App;