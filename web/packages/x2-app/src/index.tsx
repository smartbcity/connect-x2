import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';
import { X2ThemeContextProvider } from "components"
import { AppProvider } from "@smartb/archetypes-ui-providers"
import InitStore from 'InitStore';
import { languages } from 'i18n';
import { history, store } from 'store';
import {LoadingPage} from "components"

ReactDOM.render(
  <React.StrictMode>
    <X2ThemeContextProvider>
      <AppProvider
      languages={languages}
      reduxStore={store}
      history={history}
      loadingComponent={<LoadingPage />}
      >
        <InitStore />
      </AppProvider>
    </X2ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
