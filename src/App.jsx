import { useState } from 'react'
import styles from "./style.js";

 
import { Route, Routes } from "react-router-dom";
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import AppLayout from './components/AppLayout.jsx';
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
