import React from "react";
import { useTheme } from "@smartb/g2-components";
import { makeG2STyles } from "@smartb/g2-themes";
import { useTranslation } from "react-i18next";

const useStyles = makeG2STyles({});

interface ExampleProps {}

export const Example = (props: ExampleProps) => {
  const {} = props;
  const theme = useTheme
  const {t} = useTranslation()
  const { classes } = useStyles();
  return <div></div>;
};
