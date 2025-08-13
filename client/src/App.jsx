import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import SecondPage from './pages/SecondPage';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/page" element={<SecondPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  )

}

export default App
