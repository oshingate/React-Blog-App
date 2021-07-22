import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </>
  );
}

export default App;
