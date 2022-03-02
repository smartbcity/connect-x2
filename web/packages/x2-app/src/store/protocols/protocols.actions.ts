import {createActionCreator} from "deox";
import {Protocol, ProtocolName} from "ssm";

const setProtocols = createActionCreator(
  "PROTOCOLS_LIST",
  (resolve) => (protocols: Map<ProtocolName, Protocol>) => resolve({ protocols: protocols })
);

export const actions = {
  setProtocols: setProtocols,
};
