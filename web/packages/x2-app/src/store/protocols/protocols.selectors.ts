import { createSelector } from "reselect";
import { State } from "store";

const getProtocolState = (state: State) => state.protocols;

export const getProtocols = createSelector(
  [getProtocolState],
  (state) => state.protocols
);

export const selectors = {
  protocols: getProtocols,
};
