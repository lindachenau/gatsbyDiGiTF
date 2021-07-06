import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import "./layout.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      // MDBReact $primary-color: #4285f4
      main: '#4285f4'
    },
    secondary: {
      // MDBReact $info-color: #33b5e5
      main: '#33b5e5'
    }
  }
})

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div className="flexThisBox">
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
