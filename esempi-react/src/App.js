
import { RoutadellaFortuna } from './components/ruota.della.Fortuna'
import { DubleAsync } from './esercizi/doppioAsync'
import { SimilFetch } from './esercizi/similfetch'
import {Board} from './components/Tic-Tac-Toe'
import {TodoList} from './components/TodoList'
import {ImputRed} from './components/borderRed'
import {Chat} from './components/Chat'
import { ImputHookCopy } from './components/HooksCopy';
import { ImputHook } from './components/Hooks';
import { Fetch } from './components/fetch';
import logo from './logo.svg';
import './App.css';
import './simulazione-Esame/Router/Simil-simulazione.css'
import { SimulazioneEsameReact } from './simulazione-Esame/App-simulazione'
import Simulazione  from './simulazione-Esame/Router/App-simulazione copy'

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
      {/* <Board /> */}
      {/* <SimulazioneEsameReact /> */}
      <Simulazione/>
      {/* <RoutadellaFortuna/> */}
      {/* <DubleAsync /> */}
      {/* <SimilFetch url={'https://fakestoreapi.com/products/categories'} callback={(jason)=> console.log(jason)} /> */}
    </div>
  );
}

export default App;
