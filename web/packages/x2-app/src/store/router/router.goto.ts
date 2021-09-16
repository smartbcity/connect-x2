import { push } from "connected-react-router";
import {stringify} from "qs"


const pushUrl = (url: string) => push(url);

const sessionDetails = (ssmName: string, sessionName: string) => push(`/${ssmName}/${sessionName}/details`)


const sessions = (ssmName: string, params: Object) => push(`/${ssmName}/sessions${stringify(params, { addQueryPrefix: true, arrayFormat: 'repeat' })}`)

export const goto = {
  push: pushUrl,
  sessionDetails: sessionDetails,
  sessions: sessions
};
