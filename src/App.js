//import logo from './logo.svg';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const[entries, setEntries] = useState(initialEntries);
  const[desc, setDesc] = useState('');
  const[value, setValue] = useState('');
  const[isExp, setIsExp] = useState(true);
  const[isOpen, setIsOpen] = useState(false);
  const[entryId, setEntryId] = useState();
  const[incomeTotal, setIncomeTotal] = useState(0);
  const[expenseTotal, setExpenseTotal] = useState(0);
  const[total, setTotal] = useState(0);

  useEffect(() =>{
    if(!isOpen && entryId){
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].desc = desc;
      newEntries[index].value = value;
      newEntries[index].isExp = isExp;
      setEntries(newEntries);
      resetEntry();
    }
      //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map((entry) =>{
      if(entry.isExp){
        return (totalExpenses += Number(entry.value));
      }
      else{
        return (totalIncomes += Number(entry.value));
      }
      
    });
      setTotal(totalIncomes - totalExpenses);
      setExpenseTotal(totalExpenses);
      setIncomeTotal(totalIncomes);
  }, [entries]);

  function deleteEntry(id){
    const result = entries.filter(entry => entry.id !== id);
    console.log("entries", entries);
    console.log('result', result);
    setEntries(result);
  }

  function editEntry(id){
    //debugger;
    console.log(`Opened Edit with ID : ${id}`);
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDesc(entry.desc);
      setValue(entry.value);
      setIsExp(entry.isExp);
      setIsOpen(true);
    }
  }

  function addEntry(){
    const result = entries.concat({id : entries.length+1, desc, value, isExp});
    setEntries(result);
    resetEntry();
  }

  function resetEntry(){
    setDesc('');
    setValue('');
    setIsExp(true);
  }

  return (
    <Container>

      <MainHeader title = 'Budget'/>
        <DisplayBalance title = 'Your Balance:' value = {total} color = 'black'/>
        
      <DisplayBalances incomeTotal = {incomeTotal} expenseTotal = {expenseTotal}/>

      <MainHeader title = 'History' type = 'h3' />
      <EntryLines entries = {entries} deleteEntry = {deleteEntry} editEntry = {editEntry}/>
      {/* <EntryLine desc = {entries[0].desc} value = {entries[0].desc} isExp = {entries[0].isExp}/> */}

      <MainHeader title = 'Add New Transaction' type = 'h3' />
      <NewEntryForm  
        addEntry = {addEntry} 
        desc = {desc}
        value = {value}
        isExp = {isExp}
        setDesc = {setDesc}
        setValue = {setValue}
        setIsExp = {setIsExp}
      />
      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}        
        addEntry = {addEntry} 
        desc = {desc}
        value = {value}
        isExp = {isExp}
        setDesc = {setDesc}
        setValue = {setValue}
        setIsExp = {setIsExp}/>
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id : 1,
    desc : 'Work Income',
    value : 10000.00,
    isExp : false
  },
  {
    id : 2,
    desc : 'Water Bill',
    value : 100.00,
    isExp : true
  },
  {
    id : 3,
    desc : 'Rent',
    value : 5000.00,
    isExp : true
  },
  {
    id : 4,  
    desc : 'Electricity Bill',
    value : 550.00,
    isExp : true
  }
]