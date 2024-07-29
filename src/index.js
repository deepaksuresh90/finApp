import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { store } from '../../store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { /*Add BrowserRouter if you need to route based on route path*/}
    {/* 
    <BrowserRouter basename={baseurl}>
    <Routes>
       <Route path="/home" element={<protected><homePage/></protected>}/>
    </Routes>  
    </BrowserRouter>*/}

    <Provider store={store}>
    <div>"hello folks!"</div>
      {/*   Render base component here */}
    </Provider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
