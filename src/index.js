import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { legacy_createStore as createStore } from 'redux';
// import { initialValue, useReducer } from './reducers/rootReducers';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactReduxComponent from './components/ReactReduxComponent';
import ReactReducerComponent from './components/ReactReducerComponent';
import {store} from './app/store'
// const store = createStore(useReducer, initialValue)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/react-redux' element={<ReactReduxComponent />} />
          <Route path='/react-reducer' element={<ReactReducerComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
