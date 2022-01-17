import { createActionCreator } from "deox";
import {Session, SSM, SsmUriDTO} from "ssm";

const setSsmList = createActionCreator(
  "SSMLIST_SET",
  (resolve) => (ssmList: Map<SsmUriDTO, SSM>) => resolve({ ssmList: ssmList })
);

const fetchSessions = createActionCreator(
  "FETCHSESSIONS",
  (resolve) => (ssmUri: SsmUriDTO) => resolve({ ssmUri: ssmUri })
);

const fetchedSessions = createActionCreator(
  "FETCHEDSESSIONS",
  (resolve) => (sessions: Session[], ssmUri: SsmUriDTO) => resolve({ sessions: sessions, ssmUri: ssmUri })
);


export const actions = {
  setSsmList: setSsmList,
  fetchSessions: fetchSessions,
  fetchedSessions: fetchedSessions
};
