import { MenuItem } from "@smartb/archetypes-ui-layout";
import { AppLayout } from "components";


const App = () => {

    const menu: MenuItem[] = [{
        key: "appLayout-dashboard",
        label: "Dashboard",
        href: "/",
    },
    {
        key: "appLayout-sessions",
        label: "Dashboard",
        href: "/sessions",
    },
    {
        key: "appLayout-details",
        label: "Details",
        href: "/details",
    }]

  return (
    <AppLayout title="Dashboard" menu={menu}>
        
    </AppLayout>
  );
}

export default App;