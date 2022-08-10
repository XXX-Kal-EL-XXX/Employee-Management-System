import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListEmployee } from './Components/ListEmployee';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { AddEmployee } from './Components/AddEmployee';


function App() {
  return (
    <div>
      <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element = {<ListEmployee />}></Route>
          <Route path='/employees' element = {<ListEmployee />}></Route>
          <Route path='/add-employee' element={<AddEmployee />}></Route>
          <Route path='/edit-employee/:id' element={<AddEmployee />}></Route>
        </Routes>
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
