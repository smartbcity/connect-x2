import { createActionCreator } from "deox";

const setTitle = createActionCreator(
  "TITLE_SET",
  (resolve) => (title: string) => resolve({ title: title })
);

export const actions = {
  setTitle: setTitle,
};
