import { createSelector } from "reselect";
import { State } from "..";

const getTitleState = (state: State) => state.title;

export const getTitle = createSelector(
  [getTitleState],
  (state) => state.title
);

export const selectors = {
  title: getTitle,
};
