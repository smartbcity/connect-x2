import { createReducer } from "deox";
import { actions } from "./ssm.actions";
import {Session, SSM, SsmPath, SsmUriDTO} from "ssm";
import { AsyncObject } from "utils";

export interface SSMState {
  ssmList: Map<SsmPath, SSM>;
  sessionsList: Map<SsmPath, AsyncObject<{ sessions?: Session[] }>>;
}

export const initialState: SSMState = {
  ssmList: new Map<SsmPath, SSM>(),
  sessionsList: new Map<SsmPath, AsyncObject<{ sessions?: Session[] }>>(),
};

const setSsmList = (ssmList: Map<SsmUriDTO, SSM>, state: SSMState): SSMState => {
  const copy = new Map<SsmPath, SSM>()
  ssmList.forEach( (value, key) => {copy.set(key.uri, value)})
  return { ...state, ssmList: copy }
};

const fetchSessions = (ssmUri: SsmUriDTO, state: SSMState): SSMState => {
  const sessionsList = new Map(state.sessionsList)
  sessionsList.set(ssmUri.uri, { status: "PENDING", sessions: undefined })
  return { ...state, sessionsList: sessionsList }
};

const fetchedSessions = (sessions: Session[], ssmUri: SsmUriDTO, state: SSMState): SSMState => {
  const sessionsList = new Map(state.sessionsList)
  sessionsList.set(ssmUri.uri, { status: "SUCCESS", sessions: sessions })
  return { ...state, sessionsList: sessionsList }
};

export const ssmReducer = createReducer(initialState, (handleAction) => [
  handleAction(actions.setSsmList, (state: SSMState, action) =>
    setSsmList(action.payload.ssmList, state)
  ),
  handleAction(actions.fetchSessions, (state: SSMState, action) =>
  fetchSessions(action.payload.ssmUri, state)
  ),
  handleAction(actions.fetchedSessions, (state: SSMState, action) =>
  fetchedSessions(action.payload.sessions, action.payload.ssmUri, state)
  )
]);
