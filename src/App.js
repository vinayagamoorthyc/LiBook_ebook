import './App.css';
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Library from './pages/Library';
import BookCreate from './admin/BookCreate';
import AdminHome from './admin/AdminHome';

function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Library' element={<Library/>}/>
        <Route path='/AdminHome' element={<AdminHome/>}/>
        <Route path='/BookCreate' element={<BookCreate/>}/>
      </Routes>
    </NextUIProvider>
  );
}

export default App;
