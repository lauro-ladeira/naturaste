import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
