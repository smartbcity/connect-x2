import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { titleReducer } from "./title/title.reducer";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    title: titleReducer,
  });

export const history = createBrowserHistory();

const reducer = createRootReducer(createBrowserHistory());

export type State = ReturnType<typeof reducer>;

function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );
  return store;
}

export let store = configureStore();

export default store;
