import { useState } from 'react'
import styles from "./style";

 
import { Route, Routes } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AppLayout from './components/AppLayout';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
  
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
            
        </Routes>
    </>
  )
}

export default App
