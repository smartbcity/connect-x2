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
    const session = selectors.sessionsList(state).get(ssmName)
    const ssm = selectors.ssmList(state).get(ssmName)
    console.log(selectors.ssmList(state))
    const status = session?.status ?? "IDLE"

    if (status === "IDLE") {
      dispatch(actions.fetchSessions(ssmName));
      const sessions = await SSMRequester.fetchSessions(ssm!!.uri)
      dispatch(actions.fetchedSessions(sessions, ssmName));
    }
  };
};

export const queries = {
  fetchSessions: fetchSessions,
};

