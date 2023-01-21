import React,{ useEffect, useRef, useState } from 'react';
import Assignment from './components/Assignment/Assignment';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import styles from './style/scss/App.module.scss';
import Home from './pages/Home';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Context = React.createContext('');
function App() {
  const {state}: any = useSelector((state) => state)
  return (
    <main>
        {state? <Menu/> : <Home/>}
    </main>
  )
}

export default App
