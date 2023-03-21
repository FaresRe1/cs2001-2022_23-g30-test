import React from 'react';
import ReactDOM from 'react-dom/client';
import './FoodList.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'
import Images from './Images'
import square from './square.jpeg'
import App from './FoodList'

const foodlist2 = [
  { name: 'Beans', type: 'TIN', date: '2021-05-07'},
  { name: 'Beans', type: 'FRESH', date: '2022-05-07'},
  { name: 'Beans', type: 'FROZEN', date: '2023-05-07'},
  { name: 'Beans', type: 'COOKED', date: '2020-05-07'},
  { name: 'Beans', type: 'FRESH', date: '2020-09-07'},
  { name: 'Beans', type: 'TIN', date: '2020-05-09'},
  { name: 'Beans', type: 'FROZEN', date: '2019-05-07'},
  { name: 'Beans', type: 'TIN', date: '2025-05-07'},
  { name: 'Beans', type: 'COOKED', date: '2029-08-07'},
  { name: 'Beans', type: 'FROZEN', date: '2027-02-07'},
  { name: 'Beans', type: 'COOKED', date: '2024-05-07'},
  { name: 'Beans', type: 'TIN', date: '2025-05-07'},
  { name: 'Beans', type: 'FRESH', date: '2026-05-07'},
];

export default foodlist2;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

