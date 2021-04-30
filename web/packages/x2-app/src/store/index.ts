import { titleReducer } from "./title/title.reducer";
import { ssmReducer } from "./ssm/ssm.reducer";
import { initRedux } from "@smartb/archetypes-ui-providers";

const t = {
  title: titleReducer,
  ssm: ssmReducer
}

export const {store, history, reducer} = initRedux<typeof t>({
  title: titleReducer,
  ssm: ssmReducer
})

export type State = ReturnType<typeof reducer>;

