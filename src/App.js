import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LetterPage from './components/LetterPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/letters' element={<LetterPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
