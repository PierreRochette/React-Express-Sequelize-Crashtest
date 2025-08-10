import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginForm from './components/forms/LoginForm';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/page' element={<HomePage />} />
      </Routes>
    </Router>
  )

}

export default App
