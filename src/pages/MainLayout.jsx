import { Outlet } from 'react-router-dom'
// O Outlet usa p/ definir o layouts que possuem elementos comuns a várias páginas, como o Footer e Header.
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import React from 'react'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout