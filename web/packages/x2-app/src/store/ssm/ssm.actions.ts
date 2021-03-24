import { createActionCreator } from "deox";
import { SSM } from "ssm";

const setSsmList = createActionCreator(
  "SSMLIST_SET",
  (resolve) => (ssmList: Map<string, SSM>) => resolve({ ssmList: ssmList })
);

export const actions = {
  set: setSsmList,
};
