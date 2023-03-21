import Select from "react-select";
import React, { useState } from 'react';
import Content from './Content'
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './FoodList.css'


export default function Filters() {

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

    const Storage = [
        { value: "ALL", label: "All" },
        { value: "TIN", label: "Cupboard" },
        { value: "COOKED", label: "Cooked" },
        { value: "FRESH", label: "Fresh" },
        { value: "FROZEN", label: "Frozen" },
      ];
      const Sort = [
        { value: "NONE", label: "No Sort" },
        { value: "LOW", label: "Low to High" },
        { value: "HIGH", label: "High to Low" },
      ];



      function handleClick() {
        ReactDOM.render(
        <div>
        <Navbar/>
        <Filters/>
        
        <Content SStorage={SStorage} SSort={SSort} />
        <Footer/>
        </div>, document.getElementById('root'));
        
      }

    const [SStorage, SetSelectedStorage] = useState(null);
    const [SSort, SetSelectedSort] = useState(null);

    const SetStorage = (SelectedStorage) => {
    SetSelectedStorage(SelectedStorage)};

    const SetSort = (SelectedSort) => {
        SetSelectedSort(SelectedSort)};
     
      

    return (
      <div className='filters'>
        <h2 style={{color: 'white'}}>Food Type: </h2>
        <Select options={Storage} onChange={SetStorage}/>
        <h2 style={{color: 'white'}}>Sort: </h2>
        <Select options={Sort} onChange={SetSort}/>
        <button class='button' onClick={handleClick}>Search</button>
        
      </div>
        
    );
  }
