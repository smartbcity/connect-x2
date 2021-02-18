import React, { useContext } from "react";
import withConnect from "./withConnect";
import { makeStyles } from "@material-ui/core";
import { themeContext, Theme } from "@smartb/archetypes-ui-components";

const useStyles = makeStyles(() => ({}));

interface ExampleProps {}

const Example = (props: ExampleProps) => {
  const {} = props;
  const theme = useContext(themeContext);
  const classes = useStyles();
  return <div></div>;
};

export default withConnect(Example);
