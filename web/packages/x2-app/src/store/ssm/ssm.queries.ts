import { Dispatch } from "redux";
import { actions } from "./ssm.actions";
import { State } from "../index";
import { selectors } from "./ssm.selectors";
import {SSMRequester, SsmUriDTO} from "ssm";

const fetchSessions = (
  ssmUri: SsmUriDTO
) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();
    const session = selectors.sessionsList(state).get(ssmUri.uri)
    const status = session?.status ?? "IDLE"

    if (status === "IDLE") {
      dispatch(actions.fetchSessions(ssmUri));
      const sessions = await SSMRequester.fetchSessions(ssmUri)
      dispatch(actions.fetchedSessions(sessions, ssmUri));
    }
  };
};

export const queries = {
  fetchSessions: fetchSessions,
};

