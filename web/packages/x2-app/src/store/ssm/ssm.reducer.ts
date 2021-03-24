import { createReducer } from "deox";
import { actions } from "./ssm.actions";
import { SSM } from "ssm";

export interface SSMState {
  ssmList: Map<string, SSM>;
}

export const initialState: SSMState = {
  ssmList: new Map<string, SSM>(),
};

const setSsmList = (ssmList: Map<string, SSM>, state: SSMState): SSMState => {
  return {...state, ssmList: ssmList}
};

export const ssmReducer = createReducer(initialState, (handleAction) => [
  handleAction(actions.set, (state: SSMState, action) =>
  setSsmList(action.payload.ssmList, state)
  ),
]);
