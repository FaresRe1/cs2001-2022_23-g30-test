import  { React, useState } from 'react'
import Slider from 'rc-slider';
import { BiX } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiLoaderAlt } from "react-icons/bi";

import 'rc-slider/assets/index.css';

export const DonationInfo = (props) => {

  const [invalidPostcode, setInvalidPostcode] = useState(null)
  const [userPostcode, setUserPostcode] = useState("")
  const [postcodeSearchStatus, setPostcodeSearchStatus] = useState("") // SUCCESS , LOADING , ERROR

  const tempAPIResponse = [
    {
      "id": 0,
      "name": "Uxbridge Centre",
      "postcode": "UB10 0AA",
      "longitude": 23.23232,
      "latitude": 0.23223,
      "distance": "0.1 miles away"
    },
    {
      "id": 1,
      "name": "Brunel University",
      "postcode": "UB8 3PN",
      "longitude": 16.0123,
      "latitude": 11.6457,
      "distance": "0.9 miles away"
    },
    {
      "id": 2,
      "name": "Brunel Library",
      "postcode": "UB8 3PN",
      "longitude": 16.0123,
      "latitude": 11.6457,
      "distance": "1.3 miles away"
    },
  ]

  const dropoffDates = []


  function handleDropoffDates() {
    const daysToChooseFrom = 10;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = new Date();

    for (let i = 0; i < daysToChooseFrom-1; i++) {
      var dayToAdd = {};
      dayToAdd.fullDate = String(currentDate.getDate()).padStart(2, '0') + '/' + String(currentDate.getMonth() + 1).padStart(2, '0') + '/' + currentDate.getFullYear();
      dayToAdd.day = weekday[currentDate.getDay()];
      dayToAdd.dayShort = weekday[currentDate.getDay()].substring(0,3);
      dayToAdd.dayNum = String(currentDate.getDate()).padStart(2, '0');
      dropoffDates.push(dayToAdd);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  handleDropoffDates()
  
  function handleItemDetailChange(itemId, newName, newQty) {
    props.setItemDetails(props.itemDetails.map(item => {
      if (item.id === itemId) {
        console.log(item)
        if (newName){
          return { ...item, name: newName };
        } else {
          return { ...item, qty: newQty };
        }

      } else {
        // No changes
        return item;
      }
    }));
  }

  function handlePostcodeSearch(postcode) {
      setPostcodeSearchStatus("")
      
      const validPostcode = new RegExp('^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$')
      if (!validPostcode.test(postcode)) {
        setInvalidPostcode(true)
      } else {
        setInvalidPostcode(false)
        setPostcodeSearchStatus("SUCCESS")
        // make GET request etc
      }
  }

  return (
    <>
    { props.currentPage === "DonationInfo" ? 

    <div className="container">
      <div className="text-[11px] text-center pt-5 pb-3 opacity-40">Select donation type</div>

      <div className='flex justify-center'>
        <div onClick={() => props.setDonationType("Monetary")} className={props.donationType === "Monetary" ? 'bg-blue-500 hover:bg-blue-600 border-blue-700 border-[2px] cursor-pointer  text-white rounded-[8px] text-[13px] p-1 flex pr-2 mr-2' : 'bg-blue-500 opacity-40 hover:bg-blue-600 border-blue-700 border-[2px] hover:opacity-100  cursor-pointer text-white rounded-[8px] text-[13px] p-1 flex pr-2 mr-2'}>
          <BiDollarCircle className='w-5 h-5 mx-1'/>
          Monetary
        </div>
        <div onClick={() => props.setDonationType("Physical")} className={props.donationType === "Physical" ? 'bg-blue-500 hover:bg-blue-600 border-blue-700 border-[2px] cursor-pointer  text-white rounded-[8px] text-[13px] p-1 flex pr-2 mr-2' : 'bg-blue-500 opacity-40 hover:bg-blue-600 border-blue-700 border-[2px] hover:opacity-100  cursor-pointer text-white rounded-[8px] text-[13px] p-1 flex pr-2 mr-2'}>
          <BiHome className='w-[19px] h-[19px] mx-1'/>
          Physical
        </div>
      </div>
      



      { props.donationType === "Monetary" ? 
        <>
          <div className="text-[11px] text-center pt-5 pb-3  opacity-40">Allocation Settings</div>

          <div className="flex justify-center pb-4">
            <div className="text-[16px] font-[500] text-right my-auto mr-3">Amount (£):</div>
            <input  type="number" min="0" placeholder="123" value={props.donationAmount} onChange={(e) => props.setDonationAmount(e.target.value)} className="bg-gray-200 rounded-[5px] text-center px-2 py-2 text-gray-500 max-w-[70px] max-h-[30px] outline-gray-600 mr-3"/>
          </div>

          <div className="text-[18px] font-[600] text-center ">Food: <span className='text-gray-400 font-[400]'>£{props.allocationFood}</span></div>
          <div className="flex justify-center min-h-[40px]">
            <div className="text-[13px] text-center opacity-40">£0</div>
            <div className='w-[400px]  mx-[20px]'>
              <Slider 
                max={props.donationAmount}
                value={props.allocationFood}
                onChange={(value) => props.setAllocationFood(value)}
                trackStyle={{ backgroundColor: '#3b82f6', height: 10 }}
                handleStyle={{
                  border: 0,
                  height: 20,
                  width: 20,
                  marginLeft: -0,
                  marginTop: -5,
                  backgroundColor: '#2563eb',
                  opacity: 100
                }}
                railStyle={{ backgroundColor: '#e5e7eb', height: 10 }}
                />
            </div>
            <div className="text-[13px] text-center opacity-40">£{props.donationAmount}</div>
          </div>
          
          
          <div className="text-[18px] font-[600] text-center ">Clothing: <span className='text-gray-400 font-[400]'>£{props.allocationClothing}</span></div>
          <div className="flex justify-center min-h-[40px]">
            <div className="text-[13px] text-center opacity-40">£0</div>
            <div className='w-[400px] mx-[20px]'>
              <Slider 
                max={props.donationAmount}
                value={props.allocationClothing}
                onChange={(value) => props.setAllocationClothing(value)}
                trackStyle={{ backgroundColor: '#3b82f6', height: 10 }}
                handleStyle={{
                  border: 0,
                  height: 20,
                  width: 20,
                  marginLeft: -0,
                  marginTop: -5,
                  backgroundColor: '#2563eb',
                  opacity: 100
                }}
                railStyle={{ backgroundColor: '#e5e7eb', height: 10 }}
                />
            </div>
            <div className="text-[13px] text-center opacity-40">£{props.donationAmount}</div>
          </div>

          <div className="text-[18px] font-[600] text-center ">Other: <span className='text-gray-400 font-[400]'>£{props.allocationOther}</span></div>
          <div className="flex justify-center min-h-[40px]">
            <div className="text-[13px] text-center  opacity-40">£0</div>
            <div className='w-[400px] mx-[20px]'>
              <Slider 
                max={props.donationAmount}
                value={props.allocationOther}
                onChange={(value) => props.setAllocationOther(value)}
                trackStyle={{ backgroundColor: '#3b82f6', height: 10 }}
                handleStyle={{
                  border: 0,
                  height: 20,
                  width: 20,
                  marginLeft: -0,
                  marginTop: -5,
                  backgroundColor: '#2563eb',
                  opacity: 100
                }}
                railStyle={{ backgroundColor: '#e5e7eb', height: 10 }}
                />
            </div>
            <div className="text-[13px] text-center opacity-40">£{props.donationAmount}</div>
          </div>


          { (parseInt(props.allocationFood) + parseInt(props.allocationClothing) + parseInt(props.allocationOther)) !==  parseInt(props.donationAmount) ? 
          <div name="allocation-disclaimer" className="text-red-500 text-[11px] text-center">Donation allocations do not match total amount (£{props.donationAmount}) </div>
          : null
          }

      

          <div className="grid grid-cols-4 gap-3 mt-5">
            <div className="text-[16px] font-[500] text-right my-auto ">Recieve Updates?</div>

            <div className="col-span-3 flex">
              <input type="checkbox" className="w-5 h-5 mr-2 my-auto"/>
              <div name="hidden-disclaimer" className="text-gray-500 text-[11px] italic">By opting in, you will recieve timely updates about when your contributions have impacted recipents.</div>
            </div>
          </div>

          <div className="text-[11px] text-center py-5 opacity-40">Payment Details</div>

        </> 
      
      
      
      : props.donationType === "Physical" ? 
        <>
        
          <div className="text-[11px] text-center pt-6 pb-3 opacity-40">Select dropoff location</div>

          <div className="flex justify-center">
            <div className="text-[16px] font-[500] text-right my-auto mr-3">Enter your postcode:</div>
            <input onChange={(e) => setUserPostcode(e.target.value)} value={userPostcode} placeholder="WU2 7TE" className="bg-gray-200 border-y-[1px] border-l-[1px] border-gray-600 rounded-l-[5px] text-center px-2 py-2 text-gray-500 max-w-[90px] max-h-[30px] outline-none"/>
            <div onClick={() => handlePostcodeSearch(userPostcode)} className="font-[500] text-white my-auto mr-3 border-[1px] border-blue-700  bg-blue-500 hover:bg-blue-600 cursor-pointer p-[5px] rounded-r-[5px]"><BiSearch className="w-[18px] h-[18px]"/></div>
          </div>

          { invalidPostcode ? <div name="postcode-error" className="text-red-500 text-[11px] text-center pt-1">Invalid postcode.</div> : null}
            
          
          { userPostcode !== "" && invalidPostcode === false && postcodeSearchStatus === "SUCCESS" ?
            <div className='flex pt-4'>
              {tempAPIResponse.map(location => (
                <div onClick={() => props.setSelectedLocation(location)} className={ props.selectedLocation.id === location.id ? "bg-blue-500 rounded-[8px] min-w-[230px] p-[10px] cursor-pointer border-[2px] border-blue-700 hover:border-blue-700 mr-5" : "bg-slate-200 rounded-[8px] min-w-[230px] p-[10px] cursor-pointer border-[2px] border-slate-300 hover:border-blue-700 mr-5" }>
                  <div className={props.selectedLocation.id === location.id ? "text-white font-[600]" : "text-slate-600 font-[600]"} >{location.name}</div>
                  <div className='flex'>
                    <div className={props.selectedLocation.id === location.id ? "text-white opacity-60 text-[12px] font-[500]" : "text-slate-400 text-[12px] font-[500]"}>{location.postcode}</div>
                    <div className={props.selectedLocation.id === location.id ? "text-white opacity-80 text-[12px] font-[500] ml-auto" : "text-slate-500 text-[12px] font-[500] ml-auto"}>{location.distance}</div>
                  </div>
                </div>
              ))}
            </div> 
          : userPostcode !== "" && invalidPostcode === false && postcodeSearchStatus === "LOADING" ?
          <div className='flex justify-center'>
            <BiLoaderAlt className="w-[25px] h-[25px] mt-[32px] mb-[20px] mx-auto animate-spin text-blue-500"/>
          </div>
          : userPostcode !== "" && invalidPostcode === false && postcodeSearchStatus === "ERROR" ?
          <div className='flex justify-center'>
            <div className="mt-[32px] mb-[20px] mx-auto text-red-500 text-[12px]">Error Loading locations, please search again. </div>
          </div>
          : null}
        
          { JSON.stringify(props.selectedLocation) !== '{}' && !invalidPostcode ?
            <>
            <div className="text-[11px] text-center py-5 opacity-40">Select day to drop items off</div>
            <div name="dropoff_dates" className='flex justify-center'>
              {dropoffDates.map(date => (
                  <div onClick={() => props.setSelectedDate(date.fullDate)} className={ props.selectedDate === date.fullDate ? "bg-blue-500 text-center rounded-[8px] p-[10px] cursor-pointer border-[2px] border-blue-700 hover:border-blue-700  mr-5" : "bg-slate-200 text-center rounded-[8px] p-[10px] cursor-pointer border-[2px] border-slate-300 hover:border-blue-700 mr-5" }>
                    <div className={props.selectedDate === date.fullDate ? "text-white text-[10px] font-[600]" : "text-slate-600 text-[10px] font-[600]"}>{date.dayShort}</div>
                    <div className={props.selectedDate === date.fullDate ? "text-white text-[16px] font-[500]" : "text-slate-400 text-[16px] font-[500]"}  >{date.dayNum}</div>
                  </div>
              ))}
            </div>
            </>
          : null}

          <div className="text-[11px] text-center pt-5 opacity-40">Item(s) you wish to donate</div>
          
          <div className='overflow-y-auto max-h-[160px] max-w-[310px] mx-auto'>

            {props.itemDetails.map(item => (
              <div className="flex justify-center pb-2" key={item.id}>
                <input placeholder="Qty"  min="1" value={item.qty} onChange={(e) => handleItemDetailChange(item.id, false, e.target.value)} type="number" className="bg-gray-200 rounded-[5px] px-2 py-2 text-gray-600 max-w-[60px] outline-gray-600 mr-3"/>
                <input placeholder="Item name" value={item.name}  onChange={(e) => handleItemDetailChange(item.id, e.target.value, false)} className="bg-gray-200 rounded-[5px] px-2 py-2 text-gray-600 min-w-[130px] outline-gray-600"/>
                <div className='p-2' onClick={() => {
                  props.setItemDetails(
                    props.itemDetails.filter(a =>
                      a.id !== item.id
                    )
                  );
                }}>
                  <BiX className='p-[2px] text-red-500 cursor-pointer hover:text-white hover:bg-red-600 rounded-[5px] w-[30px] h-[30px]'/>
                </div>
              </div>
            ))}
            
          </div>

          <div className='bg-blue-500 hover:bg-blue-600 border-[1px] border-blue-600 text-[13px] text-white p-1 text-center rounded-[5px] max-w-[110px] mx-auto mt-3' onClick={() => {
            props.setItemId(props.itemId+1)
            props.setItemDetails([...props.itemDetails, {"id":props.itemId, "name": "", "qty": 1}])
            console.log(props.itemId)
            }}>
            Add new item
          </div>
          

        </> 
      
      
      : null }

      
    </div>

    : null }

  </>

  )
}
