//import logo from './logo.svg';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>

      <MainHeader title = 'Budget'/>
        <DisplayBalance title = 'Your Balance:' value = '15356.76' color = 'black'/>
        
      <DisplayBalances />

      <MainHeader title = 'History' type = 'h3' />
      <EntryLine desc = 'Income' value = 'Rs.1000.01'/>
      <EntryLine desc = 'Expense' value = 'Rs.500.01' isExp/>

      <MainHeader title = 'Add New Transaction' type = 'h3' />
      <NewEntryForm />

    </Container>
  );
}

export default App;
