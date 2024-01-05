import React from 'react';
import { Route, Routes } from "react-router-dom"

import { Home } from "./Pages/Home";
import { Layout } from './components/Layout';
import { Projects } from './Pages/Projects';
import { AboutMe } from './Pages/AboutMe';
import { Contact } from './Pages/Contact'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
