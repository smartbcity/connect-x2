import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';
import { X2ThemeContextProvider } from "components"
import { AppProvider } from "@smartb/archetypes-ui-providers"
import InitStore from 'InitStore';
import { languages } from 'components';
import { history, store } from 'store';
import { LoadingPage } from "components"
import { OptionnalKeycloakProvider } from './OptionnalKeycloakProvider';

ReactDOM.render(
  <React.StrictMode>
    <X2ThemeContextProvider>
      <OptionnalKeycloakProvider>
        <AppProvider
          languages={languages}
          reduxStore={store}
          history={history}
          loadingComponent={<LoadingPage />}
        >
          <InitStore />
        </AppProvider>
      </OptionnalKeycloakProvider>
    </X2ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const X2 = `%c
__/\\\\\\_______/\\\\\\______________/\\\\\\\\\\\\\\\\\\_____        
 _\\///\\\\\\___/\\\\\\/_____________/\\\\\\///////\\\\\\___       
  ___\\///\\\\\\\\\\\\/______________\\///______\\//\\\\\\__      
   _____\\//\\\\\\\\__________________________/\\\\\\/___     
    ______\\/\\\\\\\\_______________________/\\\\\\//_____    
     ______/\\\\\\\\\\\\___________________/\\\\\\//________   
      ____/\\\\\\////\\\\\\_______________/\\\\\\/___________  
       __/\\\\\\/___\\///\\\\\\____________/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_ 
        _\\///_______\\///____________\\///////////////__`

console.log(X2, ' color: rgb(254, 197, 25)');