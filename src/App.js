import './App.css';
import Left from './components/Left';
import Right from './components/Right';
import Top from './components/Top';
import { useState } from 'react';

function App() {
  const [Income, setIncome] = useState(0);
  const [Expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [selectedValue, setSelectedValue] = useState({ key: 'income' });
  
  return (
    <div className="App">
   <div className='min-h-[100vh]  bg-white w-[100%] flex justify-center py-[1em]'> 
   <div className='bg-gradient-to-r from-gray-300 to-gray-400 w-[98%] sm:h-[100vh] h-100%  p-5'>
    <Top/>
    <div className='grid sm:grid-cols-[24%_auto] grid-cols-[1]'>

        <Left Income={Income} Expense={Expense} balance={balance} selectedValue={selectedValue}  /> 
        <Right setIncome={setIncome} setExpense={setExpense} setBalance={setBalance}  setSelectedValue={setSelectedValue} />
       </div>
   </div>
   </div>

    </div>
  );
}

export default App;
