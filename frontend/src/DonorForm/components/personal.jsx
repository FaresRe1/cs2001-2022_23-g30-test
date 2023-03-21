import React from 'react'


export const PersonalInfo = (props) => {


  function validatePersonalInfo() {

    const validName = new RegExp("^[a-zA-Z]+$")
    const validEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    const validPhone = new RegExp("^0([1-6][0-9]{8,10}|7[0-9]{9})$")

    if (validName.test(props.firstName) && validName.test(props.lastName) && validEmail.test(props.email) && validPhone.test(props.phone) ) {
      // go to next page
      props.setCurrentPage("DonationInfo")
    } else {
      alert("Error: Invalid details provided. Please check your information and try again.")
    }
  }

  return (
    <>
    { props.currentPage === 'PersonalInfo' ? 
    
    <div className="container">

      <div className="grid grid-cols-5 gap-3 mt-5">
        <div className="text-[20px] font-[500] text-right my-auto">
          Name:
        </div>

        <div className="col-span-4">
          <input placeholder="First Name" value={props.firstName} onChange={(e) => props.setFirstName(e.target.value)} className="bg-gray-200 rounded-[5px] px-2 py-2 text-gray-600 min-w-[130px] outline-gray-600 mr-3"/>
          <input placeholder="Last Name" value={props.lastName} onChange={(e) => props.setLastName(e.target.value)} className="bg-gray-200 rounded-[5px] px-2 py-2 text-gray-600 min-w-[130px] outline-gray-600"/>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 mt-5">
        <div className="text-[20px] font-[500] text-right my-auto">
          Email:
        </div>

        <div className="col-span-4">
          <input placeholder="example@gmail.com" value={props.email} onChange={(e) => props.setEmail(e.target.value)} className="bg-gray-200 rounded-[5px] px-2 py-2 text-gray-600 min-w-[438px] outline-gray-600 mr-3"/>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 mt-5">
        <div className="text-[20px] font-[500] text-right my-auto">
          Phone:
        </div>

        <div className="col-span-4">
          <input placeholder="0712345678" value={props.phone} onChange={(e) => props.setPhone(e.target.value)} className="bg-gray-200 rounded-[5px] px-2 py-2 text-gray-600 min-w-[220px] outline-gray-600 mr-3"/>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 mt-5">
        <div className="text-[20px] font-[500] text-right my-auto ">
          Hidden?
        </div>

        <div className="col-span-4 flex">
          <input type="checkbox" checked={props.hiddenDonor} onChange={() => props.setHiddenDonor(!props.hiddenDonor)}  className="w-5 h-5 mr-2 my-auto"/>
          <div name="hidden-disclaimer" className="text-gray-600 text-[11px] italic">By clicking, you agree to submit this donation anonymously and have your details hidden from public display. </div>
        </div>
      </div>


      <div onClick={() => validatePersonalInfo()} className="bg-blue-500 border-[1px] border-blue-600 hover:bg-blue-600 cursor-pointer font-[500] rounded-[10px] mx-auto my-7 p-2 text-center max-w-[150px] text-white">
          Next
      </div>


      
    </div>

   : null }

  </>

  )
}
