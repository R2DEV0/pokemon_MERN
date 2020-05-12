import React,{useState} from 'react';
import './App.css';
import Pokemon from './components/pokemon';

function App() {
  const [state,setState] = useState(0);

  return (
    <div className="App">
      <Pokemon state={state} setState={setState} />
    </div>
  );
}

export default App;
