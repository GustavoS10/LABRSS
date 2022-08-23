import {useState} from 'react'
import './App.css';
import Loading from './components/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      {!loading && <Loading name={loading}/> }
    </div>
  );
}

export default App;
