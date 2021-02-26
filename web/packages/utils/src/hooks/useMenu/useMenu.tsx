import { useMemo } from "react";
import { TFunction } from "react-i18next";
import { MenuItem } from "@smartb/archetypes-ui-layout";
import { Link, LinkProps } from "react-router-dom";

export const useMenu = (t: TFunction<string>) => {
  return useMemo(() => getMenu(t), [])
}

const getMenu = (t: TFunction<string>): MenuItem<LinkProps>[] => ([{
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
}])