import { createActionCreator } from "deox";
import { Session, SSM } from "ssm";
import { SSMName } from "./ssm.reducer";

const setSsmList = createActionCreator(
  "SSMLIST_SET",
  (resolve) => (ssmList: Map<SSMName, SSM>) => resolve({ ssmList: ssmList })
);

const fetchSessions = createActionCreator(
  "FETCHSESSIONS",
  (resolve) => (ssmName: string) => resolve({ ssmName: ssmName })
);

const fetchedSessions = createActionCreator(
  "FETCHEDSESSIONS",
  (resolve) => (sessions: Session[], ssmName: string) => resolve({ sessions: sessions, ssmName: ssmName })
);


export const actions = {
  setSsmList: setSsmList,
  fetchSessions: fetchSessions,
  fetchedSessions: fetchedSessions
};
