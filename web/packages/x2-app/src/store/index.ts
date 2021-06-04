import { titleReducer } from "./title/title.reducer";
import { ssmReducer } from "./ssm/ssm.reducer";
import { initRedux } from "@smartb/archetypes-ui-providers";
import thunk from "redux-thunk";

const reducers = {
  title: titleReducer,
  ssm: ssmReducer
}

export const {store, history, reducer} = initRedux<typeof reducers>(reducers, [thunk])

export type State = ReturnType<typeof reducer>;

