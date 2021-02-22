import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoadingPage, X2I18NThemeContextProvider} from "components"
import i18next from 'i18n';

ReactDOM.render(
  <React.StrictMode>
    <X2I18NThemeContextProvider i18n={i18next} loading={<LoadingPage />}>
    <App />
    </X2I18NThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
