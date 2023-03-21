import React from 'react'
import {Link} from "react-router-dom";

export const NavigationBar = () => {


  return (
    <>
      <div className="p-5 text-white flex bg-slate-900">
        <div className='font-bold text-[20px] mr-3'>
          <Link to="/">Charity Website</Link>
        </div>
        <div className='text-[15px] mx-5 my-auto'>
          <Link to="/foodlist">Foodlist</Link>
        </div>
        <div className='text-[15px] mx-5 my-auto'>
          <Link to="/DataAnalytics">Data Analytics</Link>
        </div>
        <div className='text-[15px] mx-5 my-auto'>
          <Link to="/donation/new">Make a Donation</Link>
        </div>
        <div className='text-[15px] mx-5 my-auto'>
         <Link to="/faq">FAQ Form</Link>
        </div>
      </div>

    </>

  )
}
