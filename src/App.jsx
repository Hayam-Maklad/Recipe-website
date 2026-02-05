import { BrowserRouter, Route, Routes } from "react-router"

import Layout from "./Components/Layout"

import Recipes from "./pages/Recipes"
import Favorites from "./pages/Favorites"
import Details from "./pages/Details"
import Home from "./Components/Home"
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route  element={<Layout/>}>

      <Route path="/" element={<Home/>}/>
      <Route path="/Recipes" element={<Recipes/>}/>
        
      <Route path="Favorites" element={<Favorites/>}/>
      <Route path="Details/:id" element={<Details/>}/>
    </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
