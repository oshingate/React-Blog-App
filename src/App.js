import './style/App.css';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <LandingPage />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
