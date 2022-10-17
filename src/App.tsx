import './App.scss';
import "react-toggle/style.css"
import Toggle from 'react-toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          SecurityTag
        </p>
        <Toggle
          id='cheese-status'
          defaultChecked={false} />
      </header>
    </div>
  );
}

export default App;
