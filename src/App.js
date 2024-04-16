import './App.css';
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Library from './pages/Library';
import BookCreate from './admin/BookCreate';
import BookPage from './pages/BookPage';

function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Library' element={<Library/>}/>
        <Route path='/BookCreate' element={<BookCreate/>}/>
        <Route path='/BookPage/:id' element={<BookPage/>}/>
      </Routes>
    </NextUIProvider>
  );
}

export default App;
