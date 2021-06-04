import { createReducer } from "deox";
import { actions } from "./ssm.actions";
import { Session, SSM } from "ssm";
import { AsyncObject } from "utils";

export type SSMName = string

export interface SSMState {
  ssmList: Map<SSMName, SSM>;
  sessionsList: Map<SSMName, AsyncObject<{ sessions?: Session[] }>>;
}

export const initialState: SSMState = {
  ssmList: new Map<SSMName, SSM>(),
  sessionsList: new Map<SSMName, AsyncObject<{ sessions?: Session[] }>>(),
};

const setSsmList = (ssmList: Map<SSMName, SSM>, state: SSMState): SSMState => {
  return { ...state, ssmList: ssmList }
};

const fetchSessions = (ssmName: string, state: SSMState): SSMState => {
  const sessionsList = new Map(state.sessionsList)
  sessionsList.set(ssmName, { status: "PENDING", sessions: undefined })
  return { ...state, sessionsList: sessionsList }
};

const fetchedSessions = (sessions: Session[], ssmName: string, state: SSMState): SSMState => {
  const sessionsList = new Map(state.sessionsList)
  sessionsList.set(ssmName, { status: "SUCCESS", sessions: sessions })
  return { ...state, sessionsList: sessionsList }
};

export const ssmReducer = createReducer(initialState, (handleAction) => [
  handleAction(actions.setSsmList, (state: SSMState, action) =>
    setSsmList(action.payload.ssmList, state)
  ),
  handleAction(actions.fetchSessions, (state: SSMState, action) =>
  fetchSessions(action.payload.ssmName, state)
  ),
  handleAction(actions.fetchedSessions, (state: SSMState, action) =>
  fetchedSessions(action.payload.sessions, action.payload.ssmName, state)
  )
]);
