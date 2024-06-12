import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import ViewallUser from './components/ViewallUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoggingPage from './components/LoggingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/' element={<LoggingPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
