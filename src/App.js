import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
//import SignIn from "./Components/SignIn";
//import Donations from "./Components/Donations";
import Academy from "./Components/Academy";
import Fullscreen from "./Fullscreen";
//import Sponsor from "./Sponsor";


function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route exact path ='/' element={<Fullscreen />}>
          <Route index element={<LandingPage/>}/>
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Academy" element={<Academy/>} />      
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
