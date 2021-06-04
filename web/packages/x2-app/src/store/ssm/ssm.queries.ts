import { Dispatch } from "redux";
import { actions } from "./ssm.actions";
import { State } from "../index";
import { selectors } from "./ssm.selectors";
import { SSMRequester } from "ssm";

const fetchSessions = (
  ssmName: string
) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();
    const sessionsList = selectors.sessionsList(state);
    const status = sessionsList.get(ssmName)?.status ?? "IDLE"
    if (status === "IDLE") {
      dispatch(actions.fetchSessions(ssmName));
      const sessions = await SSMRequester.fetchSessions(ssmName)
      dispatch(actions.fetchedSessions(sessions, ssmName));
    }
  };
};

export const queries = {
  fetchSessions: fetchSessions,
};

