import {createActionCreator} from "deox";
import {ProtocolName, Session, SessionName, SSM, SsmUriDTO} from "ssm";

const fetchSessions = createActionCreator(
  "FETCHS_SESSIONS",
  (resolve) => (protocolName: ProtocolName) => resolve({ protocolName: protocolName })
);

const fetchedSessions = createActionCreator(
  "FETCHED_SESSIONS",
  (resolve) => (sessions: Session[], protocolName: ProtocolName) => resolve({ sessions: sessions, protocolName: protocolName })
);

export type FetchSsmAction = (protocolName: ProtocolName) => void

const fetchSsm: FetchSsmAction = createActionCreator(
  "FETCHS_SSM",
  (resolve) => (ssmUri: SsmUriDTO) => resolve({ ssmUri })
);

const fetchedSsm = createActionCreator(
  "FETCHED_SSM",
  (resolve) => (ssm?: SSM) => resolve({ ssm })
);

export type FetchSessionAction = (protocolName: ProtocolName) => void

const fetchSession: FetchSessionAction = createActionCreator(
  "FETCHS_SESSION",
  (resolve) => (ssmUri: SsmUriDTO, sessionName: SessionName) => resolve({ ssmUri, sessionName })
);

const fetchedSession = createActionCreator(
  "FETCHED_SESSION",
  (resolve) => (session?: Session) => resolve({ session: session })
);

export const actions = {
  fetchSessions: fetchSessions,
  fetchedSessions: fetchedSessions,
  fetchSsm: fetchSsm,
  fetchedSsm: fetchedSsm,
  fetchSession: fetchSession,
  fetchedSession: fetchedSession,
};
