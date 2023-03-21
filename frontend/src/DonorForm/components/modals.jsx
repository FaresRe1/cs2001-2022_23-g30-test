import { React, useState } from 'react'
import { BiMap, BiCalendar, BiUser, BiMoney, BiBlanket, BiBasket, BiCreditCard } from "react-icons/bi";

export const ConfirmModal = () => {

  const [tempState, setTempState] = useState("Monetary");

  return (
    <>
      <div className="z-100 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40">
        <div className='flex justify-center'>
            <div className='bg-slate-100 mt-[100px] min-w-[500px] rounded-t-[20px] text-[20px] font-[500] text-center py-[12px] border-[2px]'>
                Confirm Donation Details
            </div>
        </div>
        <div className='flex justify-center'>
          <div className='bg-slate-100 min-w-[500px]'>
            <div className='flex justify-center mt-1 mb-4'>
                <BiUser className="w-[35px] h-[35px] my-auto mx-3 opacity-90"/>
                <div>
                    <div className='text-[16px] mt-[10px] font-[700]'>John Morrison</div>
                    <div className='text-[14px] opacity-30 font-[700]'>JohnMorrison1@gmail.com</div>
                    <div className='text-[14px] opacity-30 font-[700]'>0784564654</div>
                </div>
            </div>

            
           { tempState === "Monetary" ? 
            <>  
                <div className='text-[18px] font-[700] text-center pt-2'>Donation of £30</div>
                <div className='flex justify-center'>
                    <div name="location_modal" className='rounded-[15px]'>
                        <div className='flex'>
                            <BiBasket className="w-[35px] h-[35px] m-3 opacity-90"/>
                            <div>
                                <div className='text-[14px] mt-[10px] font-[700]'>Food</div>
                                <div className='text-[12px] opacity-30 font-[700]'>£10 (33%)</div>
                            </div>
                        </div>
                    </div>

                    <div name="date_modal" className=' rounded-[15px] pr-[15px]'>
                        <div className='flex mx-5'>
                            <BiBlanket className="w-[35px] h-[35px] m-3 opacity-90"/>
                            <div>
                                <div className='text-[14px] mt-[10px] font-[700]'>Clothing</div>
                                <div className='text-[12px] opacity-30 font-[700]'>£10 (33%)</div>
                            </div>
                        </div>
                    </div>
                    <div name="date_modal" className=' rounded-[15px] pr-[15px]'>
                        <div className='flex'>
                            <BiMoney className="w-[35px] h-[35px] m-3 opacity-90"/>
                            <div>
                                <div className='text-[14px] mt-[10px] font-[700]'>Other</div>
                                <div className='text-[12px] opacity-30 font-[700]'>£10 (33%)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[11px] text-center pt-5 opacity-40">Payment Method</div>
                <div name="location_modal" className='rounded-[15px]'>
                    <div className='flex justify-center'>
                        <BiCreditCard className="w-[35px] h-[35px] m-3 opacity-90"/>
                        <div>
                            <div className='text-[14px] mt-[19px] font-[700]'>Credit Card</div>
                        </div>
                    </div>
                </div>
            
            </>
            : tempState === "Physical" ?
            <>
                <div className='flex justify-center'>
                    <div name="location_modal" className='rounded-[15px] mr-[20px] pr-[15px]'>
                        <div className='flex'>
                            <BiMap className="w-[35px] h-[35px] m-3 opacity-90"/>
                            <div>
                                <div className='text-[14px] mt-[10px] font-[700]'>Dropoff location</div>
                                <div className='text-[12px] opacity-30 font-[700]'>Brunel University, UB8 3PN</div>
                            </div>
                        </div>
                    </div>

                    <div name="date_modal" className=' rounded-[15px] pr-[15px]'>
                        <div className='flex'>
                            <BiCalendar className="w-[35px] h-[35px] m-3 opacity-90"/>
                            <div>
                                <div className='text-[14px] mt-[10px] font-[700]'>Dropoff date</div>
                                <div className='text-[12px] opacity-30 font-[700]'>26/09/2023</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-[16px] text-black font-[500] text-center pt-5 pb-3 ">Items to dropoff:</div>

                <div className='pb-5'>
                    <div className='flex justify-center'>
                        <div className='text-center font-[500] mr-[5px] text-[15px] my-auto'>
                            2 x
                        </div>
                        <div className='text-center font-[500] text-[24px] mb-[2px]'>
                            Apples
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='text-center font-[500] mr-[5px] text-[15px] my-auto'>
                            3 x
                        </div>
                        <div className='text-center font-[500] text-[24px] mb-[2px]'>
                            Bananas
                        </div>
                    </div>  

                </div>
            </>
            
            : null}
              
          </div>
        </div>
        <div className='flex justify-center'>
            <div className='bg-slate-100 min-w-[500px] rounded-b-[20px] grid grid-cols-2'>
                <div className='text-white text-center border-[1px] mx-auto border-green-600 bg-green-500 rounded-[8px] min-w-[200px] m-4 p-2'>Confirm</div>
                <div className='text-white text-center border-[1px] mx-auto border-red-600 bg-red-500 rounded-[8px] min-w-[200px] m-4 p-2'>Amend</div>
            </div>
        </div>
        
      </div>

    </>

  )
}