import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './components/Navbar'
import FullList from './components/FullList'
import NewRecord from './components/NewRecordForm'
import SingleRecord from './components/AccountInfo'
import TransactionRecords from './components/TransactionRecords';
import SavingsGroup from './components/SavingsGroup';
import EditAccount from './EditAccount';
import GroupInfo from './components/GroupInfo';
import DeleteAccount from './components/DeleteAccount';

function App() {

 


  return (
    <Router>
      <div className='container' id="container">
        <Navbar />
        <br />
        <Route path='/' exact component={FullList} />
        <Route path='/notes/:id' exact component={SingleRecord} />
        <Route path='/create' exact component={NewRecord} />
        <Route path='/savingsGroup' exact component={SavingsGroup} />
        {/* <Route path='/singleRecord' exact component={SingleRecord} /> */}
        <Route path='/editAccount/:id' exact component={EditAccount} />
        <Route path='/group/:groupName' exact component={GroupInfo} />
        <Route path='/transactionHistory' exact component={TransactionRecords} />
        <Route path='/deleteAccount/:id' exact component={DeleteAccount} />
      </div>
    </Router>
  );
}






export default App;
