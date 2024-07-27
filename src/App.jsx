import Sidebar from "./components/SIdebar";
import HomePage from "./pages/HomePage";
//import FavouritesPage from "./pages/FavouritesPage";
import AboutUsPage from "./pages/AboutUsPage";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='flex'>
      <Sidebar/> 
      <Routes>
        <Route path='/' element={<HomePage/>} />
        {/* <Route path='/favourites' element={<FavouritesPage/>} /> */}
        <Route path='/about' element={<AboutUsPage/>} />
      </Routes>
      
      
    </div>
  );
}

export default App
