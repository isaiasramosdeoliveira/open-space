import React,{ useEffect, useState } from 'react';
import Assignment from './components/Assignment/Assignment';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import styles from './style/scss/App.module.scss';
import Home from './pages/Home';

let state = false
export const Context = React.createContext(state);
function App() {
  const [value, setValue] = useState<Boolean>(state);
  return (
    <main>
      <Context.Provider value={{value, setValue} as any}>
        {value? <Menu/> : <Home value={{value, setValue}} />}
      </Context.Provider>
    </main>
  )
}

export default App
