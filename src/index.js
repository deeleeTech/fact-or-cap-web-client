import React from 'react';
import { render } from "react-dom";
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate
 } from "react-router-dom";
import App from "./App";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './__reducers';
import { AuthProvider } from './useAuth';


const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
     <BrowserRouter>
      <AuthProvider>
          <App />
      </AuthProvider>
     </BrowserRouter>
  </Provider>,
  rootElement
);
