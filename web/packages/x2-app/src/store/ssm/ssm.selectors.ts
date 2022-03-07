import {createSelector} from "reselect";
import {State} from "store";

const getSsmState = (state: State) => state.ssm;

export const getSessionsList = createSelector(
  [getSsmState],
  (state) => state.sessionsList
);

export const getCurrentSession = createSelector(
  [getSsmState],
  (state) => state.currentSession
);


export const getCurrentSsm = createSelector(
  [getSsmState],
  (state) => state.currentSsm
);


export const selectors = {
  sessionsList: getSessionsList,
  currentSsm: getCurrentSsm,
  currentSession: getCurrentSession
};
