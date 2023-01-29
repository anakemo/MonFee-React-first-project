import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store,persistor} from "./redux/";

import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
// import 'bootstrap/dist/css/bootstrap.min.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

  <Provider store={store}>


    
  <PersistGate  persistor={persistor}>
    <App />
  </PersistGate>
    </Provider> 
     
  </Router>
  
  
);

