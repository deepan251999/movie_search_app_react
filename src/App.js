import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Main from './components/main/Main';

function App() {
    return (
      <div>
          <Router>
              <Routes>
                <Route path= '/' element= { <Home/>}/>
                <Route path= 'main' element= { <Main/>}/>
              </Routes>
          </Router> 
      </div>
    );
}

export default App;
