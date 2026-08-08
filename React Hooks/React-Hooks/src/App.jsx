import { useState } from 'react'
import './App.css';
import Counter from './components/useState Hook/Counter';
import SideEffects from './components/useEffect Hook /SideEffects';
import FirstandLastName from './components/useState Hook/FirstandLastName';
import AddEmployee from './components/useState Hook/AddEmployee';

function App() {

  return (
    <>
     {/* <Counter/> */}
     {/* <SideEffects/> */}
     {/* <FirstandLastName/> */}
     <AddEmployee/>
    </>
  )
}

export default App
