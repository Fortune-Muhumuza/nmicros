import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './components/UI/Navbar'
import Signin from './components/auth/Signin'
import FullList from './components/FullList'
import NewRecord from './components/NewRecordForm'
import SingleRecord from './components/User/AccountInfo'
import TransactionRecords from './components/Transactions/TransactionRecords';
import SavingsGroup from './components/SavingsGroup';
import EditAccount from './EditAccount';
import GroupInfo from './components/GroupInfo';
import DeleteAccount from './components/DeleteAccount';
import User from './User';
import Signup from './components/auth/Signup';

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
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/user' exact component={User} />
      </div>
    </Router>
  );
}






export default App;
