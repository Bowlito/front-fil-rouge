import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import AppRoutes from './router/AppRoutes'
import Header from './components/Header/Header'


function App() {


  return (
    <>
      <Header />
      <AppRoutes />
    </>
  )
}

export default App
