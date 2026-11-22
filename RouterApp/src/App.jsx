import { Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import Shirts from "./components/Shirts"
import Jeans from "./components/Jeans"
import PageNotFound from "./components/PageNotFound"
import './App.css'



function App() {


  return (
    <>
   <NavBar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/product" element={<Products/>}>
        <Route path="shirts" element={<Shirts/>}/>
        <Route path="jeans" element={<Jeans/>}/>
        </Route>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="*" element={<PageNotFound/>}/>       // * means other Route does not match then automatically called this (*)
     </Routes>
    
    </>
  )
}

export default App
