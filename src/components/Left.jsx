

function Left({Income,Expense,balance}) {

  
  return (
    <div>
        <div className='grid  grid-rows-[40% 40% 40%] gap-2'>
    <div  className='w-[300px] shadow bg-slate-50 h-[100%] py-5 sm:mt-[2em] mt-[10px] sm:mx-5 mx-auto rounded-[5px]'>
     <h1  className='text-[30px]  w-[100%] h-[100%] flex flex-col justify-center  items-center font-bold'>Balance :<br />  <span >₹ {balance}</span></h1>
    </div>
    <div className='w-[300px]  bg-slate-50 h-[100%] py-5 sm:mt-[2em] mt-[10px] sm:mx-5 mx-auto rounded-[5px]'>
     <h1 className='text-[30px]  w-[100%] h-[100%] flex flex-col items-center justify-center font-bold' >Expense :<br /><span className="text-red-500">₹ {Expense}</span></h1>
    </div>
    <div className='w-[300px] shadow bg-slate-50 h-[100%] py-5 sm:mt-[2em] mt-[10px] sm:mx-5 mx-auto rounded-[5px]'>
     <h1 className='text-[30px]  w-[100%] h-[100%] flex flex-col items-center justify-center font-bold' >Income :<br /><span className="text-green-500">₹ {Income}</span></h1>
    </div>
    
</div></div>
  )
}

export default Left;