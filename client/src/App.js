import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";
import LoginPage from "./components/LoginPage";



function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/edit' element={<EditUser />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/users' element={<UsersList />} />
            <Route path='/login' element={<LoginPage />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
