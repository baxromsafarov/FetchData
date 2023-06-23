import './App.css';
import FetchApi from './FetchApi/FetchApi';
import IncreDecrement from './IncreDecrement/IncreDecrement';

function App() {
  return (
    <div className="App">
      <IncreDecrement />
      <FetchApi />
    </div>
  );
}

export default App;
