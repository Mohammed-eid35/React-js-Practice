import React, { Fragment } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Photos from "./pages/Photos";
import PhotoInfo from "./pages/PhotoInfo";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/photos' />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/photos/:id' element={<PhotoInfo />} />
      </Routes>
    </Fragment>
  );
}

export default App;
