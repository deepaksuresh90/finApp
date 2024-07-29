import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import {Routers} from './index'
import reportWebVitals from './reportWebVitals';
import { store } from '../../store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/*Add Generic error boundary here to handle global exception */}

    <Provider store={store}>
    <Routers/>
    <div>"hello folks!"</div>
      {/*   Render base component here */}
    </Provider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
