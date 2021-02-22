import { createReducer } from "deox";
import { actions } from "./title.actions";

export interface TitleState {
  title: string;
}

export const initialState: TitleState = {
  title: "X2"
};

export type TitleStateTransformer = (state: TitleState) => TitleState;

const setTitle = (title: string): TitleStateTransformer => () => ({
  title: title
})

export const titleReducer = createReducer(initialState, (handleAction) => [
  handleAction(actions.setTitle, (state: TitleState, action) =>
  setTitle(action.payload.title)(state)
  ),
]);
