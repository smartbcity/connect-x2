import { titleReducer } from "./title/title.reducer";
import { ssmReducer } from "./ssm/ssm.reducer";
import { protocolsReducer } from "./protocols/protocols.reducer";
import { initRedux } from "@smartb/g2-providers";
import thunk from "redux-thunk";

const reducers = {
  title: titleReducer,
  ssm: ssmReducer,
  protocols: protocolsReducer
}

export const {store, history, reducer} = initRedux<typeof reducers>(reducers, [thunk])

export type State = ReturnType<typeof reducer>;

