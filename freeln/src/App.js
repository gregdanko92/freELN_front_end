import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import Routes from './config/Routes';

function App() {
  return (
    <div >
      <Routes/>
      
    </div>
  );
}

export default App;
