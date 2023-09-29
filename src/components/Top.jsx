import React from 'react'

function Top() {
  return (
    <div>
         
     
      <div className='heading shadow flex justify-between items-center w-[98%] bg-slate-50 p-5 m-auto rounded-[10px] sm:h-[12%] h-[15%]'>
          <div>
            <h1 className='font-bold text-[20px]  text-left'>Expense Tracker</h1>
           <p className='text-left'>Track your expenses</p>
          </div>
          <div className='flex justify-center gap-2 items-center'>
          <i className="fa-solid fa-user fa-flip"></i>
            <p>Sajith</p>
          </div>
       </div>
       
      
     </div>
    
  )
}

export default Top

