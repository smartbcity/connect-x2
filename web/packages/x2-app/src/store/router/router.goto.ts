import { push } from "connected-react-router";
import {stringify} from "qs"
import {burst, ProtocolName, SsmUriDTO} from "ssm";

const pushUrl = (url: string) => push(url);

export type GotoSessionDetails = (ssmUri: SsmUriDTO, sessionName: string) => void

const sessionDetails = (ssmUri: SsmUriDTO, sessionName: string) => {
  const values = burst(ssmUri)
  return push(`/${values.channelId}/${values.chaincodeId}/${values.ssmName}/${sessionName}/details`)
}

export type GotoSessions = (protocolName: ProtocolName, params: Object) => void

const sessions: GotoSessions = (protocolName: ProtocolName, params: Object) => {
  return push(`/${protocolName}/sessions${stringify(params, {addQueryPrefix: true, arrayFormat: 'repeat'})}`)
}

export const goto = {
  push: pushUrl,
  sessionDetails: sessionDetails,
  sessions: sessions
};
