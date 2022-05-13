import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Create from './components/Create';
import Edit from './components/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
      <Route path ="/" element={<App />} />
      <Route path ="/create" element={<Create />} />
      <Route path ="/edit/:id" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);
