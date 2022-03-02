import { Dispatch } from "redux";
import { actions } from "./ssm.actions";
import { State } from "../index";
import { selectors } from "./ssm.selectors";
import {ProtocolName, SessionName, SSMRequester, SsmUriDTO} from "ssm";

const fetchSessions = (
    protocolName: ProtocolName
  // ssmUri: SsmUriDTO
) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();
    const session = selectors.sessionsList(state).get(protocolName)
    const status = session?.status ?? "IDLE"

    if (status === "IDLE") {
      dispatch(actions.fetchSessions(protocolName));
      const sessions = await SSMRequester.fetchSessions(protocolName)
      dispatch(actions.fetchedSessions(sessions, protocolName));
    }
  };
};

const fetchSession = (
  ssmUri: SsmUriDTO,
  sessionName: SessionName
) => {
  return async (dispatch: Dispatch) => {
      dispatch(actions.fetchSession(ssmUri, sessionName));
      const session = await SSMRequester.fetchSession(ssmUri, sessionName)
      dispatch(actions.fetchedSession(session));
  };
};

const fetchSsm = (
  ssmUri: SsmUriDTO,
) => {
  return async (dispatch: Dispatch) => {
      dispatch(actions.fetchSsm(ssmUri));
      const ssm = await SSMRequester.fetchSsm(ssmUri)
      dispatch(actions.fetchedSsm(ssm));
  };
};

export const queries = {
  fetchSsm: fetchSsm,
  fetchSessions: fetchSessions,
  fetchSession: fetchSession,
};

