import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollTop from '../ScrollTop/Scrolltop'

const Layout = ({searchItem, setSearchItem}) => {
  return (
    <div>
      <ScrollTop />
      <Navbar searchItem={searchItem} setSearchItem={setSearchItem} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
