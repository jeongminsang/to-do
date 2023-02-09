import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useFetch from './util/useFetch';
import useScrollTop from './util/useScrollTop';
import './App.css';

const Home = React.lazy(() => import("./Home"));
const Navbar = React.lazy(() => import('./component/Navbar'));
const TodoDetails = React.lazy(() => import('./component/TodoDetail'));
const NotFound = React.lazy(() => import('./component/NotFound'));
const Footer = React.lazy(() => import('./component/Footer'));
const Loading = React.lazy(() => import('./component/Loading'));


function App() {
  
    const [todos, isPending, error] = useFetch("http://localhost:3001/todos/");

    //advanced
    useScrollTop();

    return (
        <BrowserRouter>
            { error && <div>{ error }</div> }
            <Suspense fallback={<Loading/>}>
                <div className="app">
                    <Navbar />
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home todos={todos} isPending={isPending} />} />
                            <Route path="/todos/:id" element={<TodoDetails />} />
                            <Route path="/todos/:id" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </Suspense>
        </BrowserRouter>
    )
}

export default App;
