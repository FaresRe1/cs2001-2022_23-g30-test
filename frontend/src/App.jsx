import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Router from "./Router";
import Homepage from "./components/Homepage";
import DataAnalytics from "./DataAnalytics/DataAnalytics";
import FoodList from "./FoodList/FoodList";
import DonorForm from "./DonorForm/donorForm";
import FoodDetails from "./FoodDetails/FoodDetails";
import FAQ from "./FAQPage/FAQ.jsx"
import Registration from "../src/Registration/Registration"

//import htmllink from "./htmllink"
//import Registration from "./Registration/Registration#"
//import Login from "./Login/components/Login"

function App() {
    //import your page and use this the path where is view how it has been rendered/// <Route path="Login" element={<Login />} /> <Route path="Registration" element={<Registration />} />

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Router />}>
                    <Route index element={<Homepage />} />
                    <Route path="Homepage" element={<Homepage />} />
                    <Route path="DataAnalytics" element={<DataAnalytics />} />
                    <Route path="FoodList" element={<FoodList />} />
                    <Route path="DonorForm" element={<DonorForm />} />
                    <Route path="FoodDetails" element={<FoodDetails />} />
                    {<Route path="FAQ" element={<FAQ />} />}
                    <Route path="Registration" element={<Registration />} />




                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;