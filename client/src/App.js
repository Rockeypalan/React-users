import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";
import LoginPage from "./components/LoginPage";
import UserDetail from './components/UserDetail';



function App() {
  return (
    <Router>
      <div className='container'>
        
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:id' element={<EditUser />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/users' element={<UsersList />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/users/:id' element={<UserDetail  />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
