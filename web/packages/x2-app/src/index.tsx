import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';
import { LoadingPage, X2I18NThemeContextProvider } from "components"
import { ConnectedRouter } from "connected-react-router";
import i18next from 'i18n';
import { Provider } from "react-redux";
import store, { history } from "store";
import InitStore from 'InitStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <X2I18NThemeContextProvider i18n={i18next} loading={<LoadingPage />}>
        <ConnectedRouter history={history}>
          <InitStore />
        </ConnectedRouter>
      </X2I18NThemeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
