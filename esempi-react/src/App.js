import {Board} from './components/Tic-Tac-Toe'
import {TodoList} from './components/TodoList'
import {ImputRed} from './components/borderRed'
import {Chat} from './components/Chat'
import { ImputHookCopy } from './components/HooksCopy';
import { ImputHook } from './components/Hooks';
import { Fetch } from './components/fetch';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Fetch /> */}
      {/* <ImputHook /> */}
      {/* <ImputHookCopy /> */}
      {/* <Chat /> */}
      {/* <ImputRed /> */}
      {/* < TodoList /> */}
      <Board />
    </div>
  );
}

export default App;
