import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { red,green } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

function Right({ setIncome, setExpense, setBalance}) {
  const [selectedValue, setSelectedValue] = React.useState({key:'income'});

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });


  const [Description,setDescription] = useState({description:""})
  const [Amount,setAmount] = useState(0)
  const [isAmountValid,setIsAmountValid] = useState(true)
  const [Transactions,setTransactions] = useState([]);
  const [EditId,setEditId] = useState(null)
  const [DescriptionInput, setDescriptionInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const getDetails =(e)=>{
    const {name,value} = e.target
    setDescription({...Description,[name]:value})
    setSelectedValue({...selectedValue,key:value})
  
    if (name === 'amount') {
      setIsAmountValid(/^[0-9]+$/.test(value));
      setAmount(value);
    } else if (name === 'description') {
      setDescriptionInput(value); // 
    }
  
  }
  const addTransaction = (e) => {
    e.preventDefault();
    if(!isAmountValid || !DescriptionInput || !Amount || selectedValue.key){
      alert("Please enter the details")
    }else
    {if(EditId){
      const updatedTransaction = Transactions.map((t)=>(
        t.id === EditId?{...t,
          Description: DescriptionInput,
          Amount: Amount,
          TransactionType: selectedValue}:t
      ))
      setTransactions(updatedTransaction);
      setEditId(null);

    }else{
      const newTransaction = {
        id: Date.now(),
        Amount:parseFloat(Amount),
        Description: DescriptionInput,
        TransactionType: selectedValue,
      };
      setTransactions([...Transactions, newTransaction]);
      
    }
     
  
  }
    setAmount(0);
      setDescriptionInput('');
  };

  const handleEdit=(t)=>{
    setEditId(t.id);
    setDescriptionInput(t.Description);
    setAmount(t.Amount);
    setSelectedValue({ key: t.TransactionType });
  }
  const handleDelete=(id)=>{
     setTransactions(Transactions.filter(t=>t.id !==id))
  }
  const calculateBalance = () => {
  
    let inc = 0;
    let exp = 0;
    Transactions.map((t) => {
      if (t.TransactionType === 'income') {
        inc += parseFloat(t.Amount);
      
      } else if (t.TransactionType === 'expense') {
        exp += parseFloat(t.Amount);
       
      }
    });
    let balance = 0;
    // Initialize balance to zero
    
    balance=Math.max(0,inc-exp)


    setIncome(inc);
    setExpense(exp);
    setBalance(balance); // Calculate and set the balance
  };

    
   
    
   
    
    
  
  useEffect(()=>calculateBalance(),[Transactions,setIncome, setExpense, setBalance]);
  const filteredTransactions = Transactions.filter(
    (t) =>
      t.Description.toLowerCase().includes(searchInput.toLowerCase()) ||
      t.Amount.toString().includes(searchInput)
  );
  const transactionsToRender = searchInput ? filteredTransactions : Transactions;
  return (
    <div className='grid grid-rows-1'>
        <div className='sm:w-[95%] w-[100%]   sm:mt-[2em] my-[50px] sm:mx-5 mx-auto rounded-[5px]'>
           <div className='flex  sm:flex-row flex-col gap-[1em]'>
           <div className='px-[50px] py-[50px] h-[100%]   w-[100%] shadow bg-slate-50 rounded'>
               <h1 className='font-bold text-[25px]'>Add your Expense/Income</h1>
                <form onSubmit={addTransaction} >
                <div className='my-5 w-[100%]'> <TextField className='w-[100%]' id="filled-basic" label="₹ Amount" error={!isAmountValid}  variant="filled" name='amount'  value={Amount || ""}   onChange={(e)=>getDetails(e)}/></div>
               <div className='my-5 w-[100%]'> <TextField className='w-[100%]'  id="filled-basic" label="Description" variant="filled" name='description' value={DescriptionInput || ""}  onChange={(e)=>getDetails(e)} /></div>
              
               <div className='flex justify-left items-center gap-2'>
               <div> 
                <label htmlFor='incomed' onChange={()=>calculateBalance()}  >
                   <Radio   id='incomed'  
            {...controlProps('income')}
            sx={{
              color: green[800],
              '&.Mui-checked': {
                color: green[600],
              },
            }} 
          /><span className='font-semibold'>Income</span>
                </label>
               </div>
               <div> 
                 <label  htmlFor='expensed' onChange={()=>calculateBalance()} >
                   <Radio  id='expensed'  
            {...controlProps('expense')}
            sx={{
              color: red[800],
              '&.Mui-checked': {
                color: red[600],
              },
            }} 
          /><span  className='font-semibold'>Expense</span>
                 </label>
               </div></div>
              <div className='w-[100%] my-[1em]'> <Button style={{backgroundColor:'black',fontWeight:'600',borderRadius:'10px'}} className='w-[100%] h-[50px]  text-white' variant="contained"  type='submit' >Add Expense / Income</Button></div>
                </form>
           </div>
           <div className='px-[50px] py-[30px] h-[100%]   w-[100%] rounded shadow bg-slate-50 relative right-0 top-0 left-0  '>
            <h1 className='font-bold text-[20px]'>Records</h1>
          <div className='my-5 w-[100%]'><input    value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} className='py-[10px] px-[20px] outline-none w-[100%] rounded bg-gray-200 ' type="text" placeholder='Search'/></div>
         
           

             {transactionsToRender.map((t)=>(
              
              <div className='flex justify-center bg-gray-200 rounded px-2 my-2 w-[100%] '>
                 <div 
                 className='bg-gray-200 w-[100%] flex justify-between py-[15px] pr-2 rounded  my-2'>
                  
               { t.TransactionType==='income' &&
                 <div className='flex justify-between items-center  font-bold w-[100%]'>
                    <span>{t.Description}</span>
                    <span className='text-green-600 '>₹ {t.Amount}</span>
                 </div>
                }
                 { t.TransactionType==='expense' &&
                 <div className=' flex justify-between items-center  font-bold w-[100%] '>
                    <span>{t.Description}</span>
                    <span className='text-red-600 '>₹ {t.Amount}</span>
                 </div>
                }
                
                
                
                </div>
                <div className='flex justify-center items-center gap-2  rounded  '>
                <button onClick={e=>handleEdit(t)} className='bg-white rounded px-2 py-1 border-2'><i class='bx bxs-edit-alt'></i></button>
               <button onClick={e=>handleDelete(t.id)} className='bg-white rounded px-2 py-1 border-2'> <i class="fa-solid fa-trash"></i></button>
                </div>
  
              </div>
             ))}
             

             

            
          
          
          
        
           </div>
           </div>
   </div>

   
   </div>
  )
}

export default Right;
