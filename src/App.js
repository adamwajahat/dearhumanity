import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LetterPage from './pages/LetterPage';
import Home from './pages/Home';
import LetterDetailPage from './pages/LetterDetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/letters' element={<LetterPage/>}></Route>
            <Route path='/letters/:id' element={<LetterDetailPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
