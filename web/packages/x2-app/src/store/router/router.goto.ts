import { push } from "connected-react-router";
import {stringify} from "qs"
import {burst, SsmUriDTO} from "ssm";

const pushUrl = (url: string) => push(url);

const sessionDetails = (ssmUri: SsmUriDTO, sessionName: string) => {
  const values = burst(ssmUri)
  return push(`/${values.channelId}/${values.chaincodeId}/${values.ssmName}/${sessionName}/details`)
}

const sessions = (ssmUri: SsmUriDTO, params: Object) => {
  const values = burst(ssmUri)
  return push(`/${values.channelId}/${values.chaincodeId}/${values.ssmName}/sessions${stringify(params, {addQueryPrefix: true, arrayFormat: 'repeat'})}`)
}
export const goto = {
  push: pushUrl,
  sessionDetails: sessionDetails,
  sessions: sessions
};
