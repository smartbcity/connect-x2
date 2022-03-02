import { createReducer } from "deox";
import {Protocol, ProtocolName} from "ssm";
import {actions} from "./protocols.actions";

export interface ProtocolState {
  protocols: Map<ProtocolName, Protocol>;
}

export const initialState: ProtocolState = {
  protocols: new Map<ProtocolName, Protocol>(),
};

const setProtocols = (protocols: Map<ProtocolName, Protocol>, state: ProtocolState): ProtocolState => {
  const copy = new Map<ProtocolName, Protocol>()
  protocols.forEach( (value, key) => {copy.set(key, value)})
  return { ...state, protocols: copy }
};

export const protocolsReducer = createReducer(initialState, (handleAction) => [
  handleAction(actions.setProtocols, (state: ProtocolState, action) =>
      setProtocols(action.payload.protocols, state)
  ),
]);
