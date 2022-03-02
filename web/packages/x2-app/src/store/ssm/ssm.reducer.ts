import {createReducer} from "deox";
import {actions} from "./ssm.actions";
import {ProtocolName, Session, SSM} from "ssm";
import {AsyncObject} from "utils";

export interface SSMState {
  sessionsList: Map<ProtocolName, AsyncObject<{ sessions?: Session[] }>>;
  currentSsm: AsyncObject<{ ssm?: SSM }>
  currentSession: AsyncObject<{ session?: Session }>
}

export const initialState: SSMState = {
  sessionsList: new Map<ProtocolName, AsyncObject<{ sessions?: Session[] }>>(),
  currentSsm: {
    status: "IDLE",
  },
  currentSession: {
    status: "IDLE",
  }
};

const fetchSessions = (protocolName: ProtocolName, state: SSMState): SSMState => {
  const sessionsList = new Map(state.sessionsList)
  sessionsList.set(protocolName, { status: "PENDING", sessions: undefined })
  return { ...state, sessionsList: sessionsList }
};

const fetchedSessions = (sessions: Session[], protocolName: ProtocolName, state: SSMState): SSMState => {
  const sessionsList = new Map(state.sessionsList)
  sessionsList.set(protocolName, { status: "SUCCESS", sessions: sessions })
  return { ...state, sessionsList: sessionsList }
};

const fetchSession = (state: SSMState): SSMState => {
  return { ...state, currentSession: {
      status: "IDLE",
    }
  }
};

const fetchedSession = (state: SSMState, sessions?: Session): SSMState => {
  return { ...state, currentSession: {
      status: "SUCCESS",
      session: sessions
    }
  }
};

const fetchSsm = (state: SSMState): SSMState => {
  return { ...state, currentSsm: {
      status: "IDLE",
    }
  }
};

const fetchedSsm = (state: SSMState, ssm?: SSM): SSMState => {
  return { ...state, currentSsm: {
      status: "SUCCESS",
      ssm: ssm
    }
  }
};

export const ssmReducer = createReducer(initialState, (handleAction) => [
  handleAction(actions.fetchSessions, (state: SSMState, action) =>
  fetchSessions(action.payload.protocolName, state)
  ),
  handleAction(actions.fetchedSessions, (state: SSMState, action) =>
  fetchedSessions(action.payload.sessions, action.payload.protocolName, state)
  ),
  handleAction(actions.fetchSession, (state: SSMState) =>
      fetchSession(state)
  ),
  handleAction(actions.fetchedSession, (state: SSMState, action) =>
    fetchedSession(state, action.payload.session)
  ),
  handleAction(actions.fetchSsm, (state: SSMState) =>
      fetchSsm(state)
  ),
  handleAction(actions.fetchedSsm, (state: SSMState, action) =>
      fetchedSsm(state, action.payload.ssm)
  )
]);
