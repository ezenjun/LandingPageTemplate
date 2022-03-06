import './App.css';
import { Routes, Route,} from 'react-router-dom'
import Home from './pages';
import SignupPage from './pages/signup'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
  );
}

export default App;
