import { createSelector } from "reselect";
import { State } from "store";

const getSsmState = (state: State) => state.ssm;

export const getSsmList = createSelector(
  [getSsmState],
  (state) => state.ssmList
);

export const selectors = {
  ssmList: getSsmList,
};
