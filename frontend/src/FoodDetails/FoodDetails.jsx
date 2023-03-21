import React, { useState } from "react";
import axios from 'axios';
import './FoodDetails.css';
import Navbar from "../components/navbar/navbar";
import foodpyramid from "../assets/FoodDetails/USDA_Food_Pyramid.gif"
import Footer from "../components/footer/footer"

const FoodDetails = () => {
  const [data, setData] = useState({
    food_name: "",
    calories: "",
    fat: "",
    protein: "",
    carbohydrates: "",
    sugar: "",
    sodium: "",
    vitamin_a: "",
    vitamin_c: "",
    potassium: "",
    iron: "",
    serving: "",
    category: "",
    expDate: "",
    quantity: ""
    
  });

  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [displayError, setShowError] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newData = Object.assign({}, data);
    newData[name] = value;
    setData(newData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmation = (event) => {
    /*
    * 
    * Using axios to make a post request example
    * The then and catch clauses logs in the console the response from spring boot and catches errors then logs them.
    *
    */
    console.log("Form submitted: ", data);
    axios.post('http://localhost:8080/formsubmit', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        setSubmitSuccess(true);
      })
      .catch(error => {
        console.log(error);
        setShowError(true);
      });
    
  };


  return (
  <div>
    <Navbar />

    <div className='FoodDBody'>
      <div className="SubmitForm">
    <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="food_name">Food Name: </label>
          <input type="text" name="food_name" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="calories">Calories: </label>
          <input type="number" name="calories" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div> 
          <label htmlFor="fat">Fat: </label>
          <input type="number" name="fat" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="protein">Protein: </label>
          <input type="number" name="protein" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="carbohydrates">Carbohydrates: </label>
          <input type="number" name="carbohydrates" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="sugar">Sugar: </label>
          <input type="number" name="sugar" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="sodium">Sodium: </label>
          <input type="number" name="sodium" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="vitamin_a">Vitamin A: </label>
          <input type="number" name="vitamin_a" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="vitamin_c">Vitamin C: </label>
          <input type="number" name="vitamin_c" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="potassium">Potassium: </label>
          <input type="number" name="potassium" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="iron">Iron: </label>
          <input type="number" name="iron" min="0" step="0.01" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="serving">Serving: </label>
          <input type="number" name="serving" min="1" step="1" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="category">Category:</label>
          <select name="category" onChange={handleChange} required>
              <option value="">-- Select Food Category --</option>
              <option value="Fresh">Fresh</option>
              <option value="Cooked">Cooked</option>
              <option value="Frozen">Frozen</option>
              <option value="Tin">Tin</option>
          </select>
      </div>
      <div>
          <label htmlFor="expDate">Expiry Date: </label>
          <input type="date" name="expDate" onChange={handleChange} required/>
      </div>
      <div>
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" name="quantity" min = "1" step = "1" onChange={handleChange} required/>      
      </div>
      <button type="submit">Submit nutrition information!</button>
    </form>
      </div>
      {showConfirmation && (
        <div className='confirmation'>
          <p>Are you sure you want to submit the following data?</p>
          <button onClick={handleConfirmation}>Yes Submit!</button>
          <button onClick={() => {
            setShowConfirmation(false); setShowError(false); setSubmitSuccess(false)}}>
            No Go back!</button>
        </div>
      )}

      {submitSuccess && (
        <div>
          <p>Submitted data successfully!</p>
        </div>
      )}
      {displayError && (
        <div>
          <p>Error on submitting data!</p>
        </div>
      )}
        <div className="FPimage">
          <img src={foodpyramid}/>
        </div>

        {/*
        <div className="FDfooter">
            <Footer />
        </div>
        */}
    </div>
        </div>


  );
};

export default FoodDetails;
