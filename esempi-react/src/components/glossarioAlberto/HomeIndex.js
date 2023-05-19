
import './All.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import AsyncCall from "./components/AsyncCall"
import DynamicInputs from "./components/DynamicInputs"
import ProductColums from "./components/ProductColumns"
import RefactoringFetch from "./components/RefactoringFetch"
import SimpleChat from "./components/SimpleChat"
import SimplerTodoList from "./components/SimplerTodoList"
import TodoList from "./components/TodoList"
import TooManyReRenders from "./components/TooManyReRenders"
import UseStateAsyncNature from "./components/UseStateAsyncNature"
import UseStateFunctionCallback from "./components/UseStateFunctionCallback"
import UseStateUseEffect from "./components/UseStateUseEffect"
import UseStateUseEffectWhy from "./components/UseStateUseEffectWhy"
import WhyLoopingWithMap from "./components/WhyLoopingWithMap"
import WhyUseState from "./components/WhyUseState"


function Layout() {

    return (
        <>
            <header className="App-header">
                React basics
            </header>
            <div className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/asyncCall">AsyncCall</Link></li>
                        <li><Link to="/dynamicInput">DynamicInputs</Link></li>
                        <li><Link to="/productColums">ProdactColums</Link></li>
                        <li><Link to="/refactoringFetch">RefactoringFetch</Link></li>
                        <li><Link to="/simpleChat">SimpleChat</Link></li>
                        <li><Link to="/simplerTodoList">SimplerTodoList</Link></li>
                        <li><Link to="/todoList">TodoList</Link></li>
                        <li><Link to="/tooManyReRenders">TooManyReRenders</Link></li>
                        <li><Link to="/useStateAsyncNature">UseStateAsyncNature</Link></li>
                        <li><Link to="/useStateFunctionCallback">UseStateFunctionCallback</Link></li>
                        <li><Link to="/useStateUseEffect">UseStateUseEffect</Link></li>
                        <li><Link to="/useStateUseEffectWhy">UseStateUseEffectWhy</Link></li>
                        <li><Link to="/whyLoopingWithMap">WhyLoopingWithMap</Link></li>
                        <li><Link to="/whyUseState">WhyUseState</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}


export default function Glossario() {

    return (
        <>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index path='asyncCall' element={<AsyncCall />} />
                        <Route path='dynamicInput' element={<DynamicInputs />} />
                        <Route path='productColums' element={<ProductColums />} />
                        <Route path='refactoringFetch' element={<RefactoringFetch />} />
                        <Route path='simpleChat' element={<SimpleChat />} />
                        <Route path='simplerTodoList' element={<SimplerTodoList />} />
                        <Route path='todoList' element={<TodoList />} />
                        <Route path='tooManyReRenders' element={<TooManyReRenders />} />
                        <Route path='useStateAsyncNature' element={<UseStateAsyncNature />} />
                        <Route path='useStateFunctionCallback' element={<UseStateFunctionCallback />} />
                        <Route path='useStateUseEffect' element={<UseStateUseEffect />} />
                        <Route path='useStateUseEffectWhy' element={<UseStateUseEffectWhy />} />
                        <Route path='whyLoopingWithMap' element={<WhyLoopingWithMap />} />
                        <Route path='whyUseState' element={<WhyUseState />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    )

}