import React from 'react'
import { Outlet } from "react-router-dom";

import Footer from "./Components/Footer";
import Nav from "./Components/Nav";


const Fullscreen = () => {
  return (
    <>
      <Nav />
        <Outlet />
      <Footer />
    </>
  )
}

export default Fullscreen;
