import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/index.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  HashRouter,
  // RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
