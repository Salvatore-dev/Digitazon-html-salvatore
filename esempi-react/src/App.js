
import { RoutadellaFortuna } from './components/ruota.della.Fortuna'
import { DubleAsync } from './esercizi/doppioAsync'
import { SimilFetch } from './esercizi/similfetch'
import {Board} from './components/Tic-Tac-Toe'
import {TodoList} from './components/TodoList'
import {ImputRed} from './components/borderRed'
import {Chat} from './components/Chat'
import { ImputHookCopy } from './components/HooksCopy';
import ChatGpt from './esercizi/esercizioChatGpt'
import { ImputHook } from './components/Hooks';
import { Fetch } from './components/fetch';
import logo from './logo.svg';
//import './App.css';
import { SimulazioneEsameReact } from './simulazione-Esame/App-simulazione'
import Simulazione  from './simulazione-Esame/Router/App-simulazione copy'
import Glossario from './components/glossarioAlberto/HomeIndex' 
import Inputs from './esercizi/esercizioInputs'
import EsameThirdModule from './Esame-react/EsameReact'
import TestComponent from './esercizi/testComponent'

function App() {
  return (
    <div>
      {/* <Fetch /> */}
      {/* <ImputHook /> */}
      {/* <ImputHookCopy /> */}
      {/* <Chat /> */}
      {/* <ImputRed /> */}
      {/* < TodoList /> */}
      {/* <Board /> */}
      {/* <SimulazioneEsameReact /> */}
      {/* <Simulazione/> */}
      {/* <RoutadellaFortuna/> */}
      {/* <DubleAsync /> */}
      {/* <Glossario/> */}
      {/* <ChatGpt /> */}
      {/* <Inputs /> */}
      <EsameThirdModule />
      {/* <TestComponent /> */}
      {/* <SimilFetch url={'https://fakestoreapi.com/products/categories'} callback={(jason)=> console.log(jason)} /> */}
    </div>
  );
}

export default App;
