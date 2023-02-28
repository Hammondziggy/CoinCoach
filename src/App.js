import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import SignIn from "./Components/SignIn";
import Donations from "./Components/Donations";
import Academy from "./Components/Academy";
import Fullscreen from "./Fullscreen";
import Sponsor from "./Sponsor";
import Videos from "./Components/Videos";
import Articles from "./Components/Articles";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Fullscreen />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Academy' element={<Academy />}>
            <Route path="/Academy/Videos" element= {<Videos />} />
            <Route path="Academy/Articles" element= {<Articles />} />
          </Route>
        </Route>
        <Route element={<Sponsor />}>
          <Route path='/donation' element={<Donations />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
