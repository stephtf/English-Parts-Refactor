import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <Router> 
      <Routes>
        <Route exact path='/' element={<Container />} />
      </Routes>
    </Router>
  );
}

export default App;
