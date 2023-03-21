import { React, useState } from 'react';
import { DonationInfo } from '../DonorForm/components/donation';
import { PersonalInfo } from '../DonorForm/components/personal';
import { Footer } from '../DonorForm/components/footer';
import { ConfirmModal } from '../DonorForm/components/modals';
import { NavigationBar } from '../DonorForm/components/navbar';


export default function DonorForm() {


  const [currentPage, setCurrentPage] = useState('PersonalInfo')

  // Personal Info
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [hiddenDonor, setHiddenDonor] = useState(false)

  // Donation Info
  const [donationType, setDonationType] = useState("")

  const [donationAmount, setDonationAmount] = useState(0)
  const [recieveUpdates, setRecieveUpdates] = useState(false)
  const [allocationFood, setAllocationFood] = useState(0)
  const [allocationClothing, setAllocationClothing] = useState(0)
  const [allocationOther, setAllocationOther] = useState(0)

  const [itemDetails, setItemDetails] = useState([])
  const [itemId, setItemId] = useState(1)
  const [selectedLocation, setSelectedLocation] = useState({})
  const [selectedDate, setSelectedDate] = useState("")
  
  // validate submit button

  return (  
    <>
      <NavigationBar />
      <div className="mx-auto min-h-[calc(100vh-140px)] max-w-3xl flex-col bg-slate-100 bg-opacity-50 p-5">
        <div className="text-[30px] font-bold text-center">Donor Form</div>
        
        <div className="grid grid-cols-2">
          <div className={currentPage === "PersonalInfo" ? "bg-blue-500 font-[500] rounded-l-[10px] mt-5 p-3 text-center min-w-[200px] text-white" : "bg-blue-500 font-[500] rounded-l-[10px] mt-5 p-3 text-center min-w-[200px] text-white opacity-40"}>
              Personal Info
          </div>
          <div className={currentPage === "DonationInfo" ? "bg-blue-500 font-[500] rounded-r-[10px] mt-5 p-3 text-center min-w-[200px] text-white" : "bg-blue-500 font-[500] rounded-r-[10px] mt-5 p-3 text-center min-w-[200px] text-white opacity-40"}>
              Donation Info
          </div> 
        </div>

        <PersonalInfo 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        hiddenDonor={hiddenDonor}
        setHiddenDonor={setHiddenDonor}
        ></PersonalInfo>
      
      <DonationInfo
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        donationAmount={donationAmount}
        setDonationAmount={setDonationAmount}
        donationType={donationType}
        setDonationType={setDonationType}
        recieveUpdates={recieveUpdates}
        setRecieveUpdates={setRecieveUpdates}
        allocationFood={allocationFood}
        setAllocationFood={setAllocationFood}
        allocationClothing={allocationClothing}
        setAllocationClothing={setAllocationClothing}
        allocationOther={allocationOther}
        setAllocationOther={setAllocationOther}
        itemDetails={itemDetails}
        setItemDetails={setItemDetails}
        itemId={itemId}
        setItemId={setItemId}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        ></DonationInfo>

        { currentPage === "DonationInfo" && donationType !== "" ?
          <div className="">
            <div className="grid grid-cols-2">
              <div onClick={() => setCurrentPage("PersonalInfo")} className="bg-blue-500 border-[1px] border-blue-600 hover:bg-blue-600 cursor-pointer font-[500] rounded-[10px] mx-auto my-7 p-2 text-center min-w-[150px] text-white">
                Back
              </div>

              <div className="bg-green-500 hover:bg-green-600 border-[1px] border-green-600 cursor-pointer font-[500] rounded-[10px] mx-auto my-7 p-2 text-center min-w-[150px] text-white">
                Submit
              </div>
            </div>
          </div>
        : null}

      {/* <ConfirmModal/> */}
      </div>

      
      <Footer/>

    </>
  )
}
