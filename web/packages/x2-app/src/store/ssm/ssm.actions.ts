import { createActionCreator } from "deox";
import {Session, SSM, SsmName} from "ssm";

const setSsmList = createActionCreator(
  "SSMLIST_SET",
  (resolve) => (ssmList: Map<SsmName, SSM>) => resolve({ ssmList: ssmList })
);

const fetchSessions = createActionCreator(
  "FETCHSESSIONS",
  (resolve) => (ssmName: SsmName) => resolve({ ssmName: ssmName })
);

const fetchedSessions = createActionCreator(
  "FETCHEDSESSIONS",
  (resolve) => (sessions: Session[], ssmName: SsmName) => resolve({ sessions: sessions, ssmName: ssmName })
);


export const actions = {
  setSsmList: setSsmList,
  fetchSessions: fetchSessions,
  fetchedSessions: fetchedSessions
};
