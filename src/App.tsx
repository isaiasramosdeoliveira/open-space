import { useEffect, useState } from 'react';
import Assignment from './components/Assignment/Assignment';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import styles from './style/scss/App.module.scss';
import Home from './pages/Home';


function App() {
  const [value, setValue] = useState(false);
  useEffect((): void =>{
    const handleLoandingPage = (): void =>{
      setValue(value)
    }
    handleLoandingPage()
  }, [value])
  
  return (
    <main>
      {value? <Menu/> : <Home/>}
    </main>
  )
}

export default App
