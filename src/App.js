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
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from './actions/entries.actions';
//import axios from 'axios';
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

function App() {
  const[incomeTotal, setIncomeTotal] = useState(0);
  const[expenseTotal, setExpenseTotal] = useState(0);
  const[total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  useEffect(() =>{
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

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

   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  },[dispatch]);


  return (
    <Container>

      <MainHeader title = 'Budget'/>
        <DisplayBalance title = 'Your Balance:' value = {total} color = 'black'/>
        
      <DisplayBalances incomeTotal = {incomeTotal} expenseTotal = {expenseTotal}/>

      <MainHeader title = 'History' type = 'h3' />
      <EntryLines entries = {entries} />
      {/* <EntryLine desc = {entries[0].desc} value = {entries[0].desc} isExp = {entries[0].isExp}/> */}

      <MainHeader title = 'Add New Transaction' type = 'h3' />
      <NewEntryForm />
      <ModalEdit 
        isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
