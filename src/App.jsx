import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./layouts/Root";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Process from "./pages/Process";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/process" element={<Process />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>

       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
