import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Root from './components/root';
import About from './components/about';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",  
    element:<Root/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'home',
        element:<Home/>
        
      },
      {
        path:'about',
        element:<About/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
