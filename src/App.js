import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AnimePage from './pages/AnimePage';
import CharacterPage from './pages/CharacterPage';
import Homepage from './pages/Homepage';
import OopsPage from './pages/OopsPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/searchResults' element={<ResultsPage />} />
        <Route path='/anime/:id' element={<AnimePage />} />
        <Route path='/characters/:id' element={<CharacterPage />} />
        <Route path='/oops' element={<OopsPage />} />
      </Routes>
    </div>
  );
}

export const URL = "https://us-central1-anime-list-360918.cloudfunctions.net/api";
export default App;
