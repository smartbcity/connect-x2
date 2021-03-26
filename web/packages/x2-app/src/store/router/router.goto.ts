import { push } from "connected-react-router";


const pushUrl = (url: string) => push(url);

const sessionDetails = (ssmName: string, sessionName: string) => push(`/${ssmName}/${sessionName}/details`)

export const goto = {
  push: pushUrl,
  sessionDetails: sessionDetails
};
