import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/searchResults' element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
