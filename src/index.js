import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Routers from './Routes'
import reportWebVitals from './reportWebVitals';
import  store  from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <h1>"hello folks!"</h1>
    {/*Add Generic error boundary here to handle global exception */}

     <Provider store={store}>
    {/* <Routers/> */}
   
      {/*   Render base component here */}
    </Provider> 


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
