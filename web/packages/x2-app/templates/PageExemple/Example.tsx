import React from "react";
import { useTheme } from "@smartb/archetypes-ui-components";
import { highLevelStyles } from "components";
import { useTranslation } from "react-i18next";

const useStyles = highLevelStyles({});

interface ExampleProps {}

export const Example = (props: ExampleProps) => {
  const {} = props;
  const theme = useTheme
  const {t} = useTranslation()
  const classes = useStyles();
  return <div></div>;
};
