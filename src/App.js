import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AnimePage from './pages/AnimePage';
import CharacterPage from './pages/CharacterPage';
import Homepage from './pages/Homepage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/searchResults' element={<ResultsPage />} />
        <Route path='/anime/:id' element={<AnimePage />} />
        <Route path='/character/:id' element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
