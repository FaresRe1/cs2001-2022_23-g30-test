import React, { useState, useEffect } from 'react';
import square from './square.jpeg'
import TIN from './TIN.jpg'
import FRESH from './FRESH.jpg'
import FROZEN from './FROZEN.jpg'
import COOKED from './COOKED.jpg'
import Images from './Images'
import Navbar from './Navbar'
import Filters from './Filters'
import Footer from './Footer'
import App from './FoodList'
import { render } from '@testing-library/react'
import { ReactDOM } from 'react'




const Content = (props) => {

const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('TEST 1 HERE');
    fetch('http://localhost:4000/data')
      .then(response => response.json())

      .then(data => {
        setMessage(data.message);
        console.log('TEST 2 HERE');
      });
  }, []);

   const foodlist = [...message];

    if(props.SStorage==null || props.SSort==null){
        alert('SELECT FILTERS');
        return(null)

    }

  
    
    let templist;
    if(props.SStorage.value===null){
        templist=[...foodlist]
    }
    else if(props.SStorage.value!='ALL'){
        templist=foodlist.filter(food=>food.type===props.SStorage.value)
    } else {
        templist=[...foodlist]
    }

    if(props.SSort.value!==null){
        
    if(props.SSort.value==='LOW'){
        templist.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    else if(props.SSort.value==='HIGH'){
        templist.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    }

    
    
    //const itemElements = foodlist.map(item => <div>{item.type}</div>);

    function Details(event){
        const buttonId = event.target.id;
        //console.log(`Button ${buttonId} was clicked`)
        const IntId= parseInt(buttonId)
        alert('Name: '+templist[IntId].name+'\n'+
        'Type : '+templist[IntId].type+'\n'+
        'Exp Date : '+templist[IntId].date+'\n')
    }

    
    return(
        <div class="grid-container">
            {templist.map((food, i)=>(
            <div>
            {'COOKED' === food.type ? 
            <div class="grid-item">
            <button id={i} className="COOKED" onClick={Details}/>
            <p>Name: {food.name}</p>
            <p>Type: Cooked</p>
            <p>Exp date: {food.date}</p>
            </div> : 
            'TIN' === food.type ? 
            <div class="grid-item">
            <button id={i} className="TIN" onClick={Details}/>
            <p>Name: {food.name}</p>
            <p>Type: Cupboard</p>
            <p>Exp date: {food.date}</p>
            </div> : 
            'FROZEN' === food.type ? 
            <div class="grid-item">
            <button id={i} className="FROZEN" onClick={Details}/>
            <p>Name: {food.name}</p>
            <p>Type: Frozen</p>
            <p>Exp date: {food.date}</p>
            </div> : 
            'FRESH' === food.type ? 
            <div class="grid-item">
            <button id={i} className="FRESH" onClick={Details}/>
            <p>Name: {food.name}</p>
            <p>Type: Fresh</p>
            <p>Exp date: {food.date}</p>
            </div> : 
            <p>INVALID FOOD TYPE</p>}
            
            
            
            </div>
            ))}  
        </div> 
        )
        

    
}

export default Content
