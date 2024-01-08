import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginform from './Components/Assets/LoginForm/Loginform';
import Signup from './Components/Assets/LoginForm/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default route for login */}
          <Route path='/' element={<Loginform />} />
          <Route path='/login' element={<Loginform/>}/>
          {/* Route for signup */}
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

