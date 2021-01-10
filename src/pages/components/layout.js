import React from 'react'
import AppFooter from './footer'
import HeaderApp from './headerApp'
import '../styles/index.scss'

const Layout = props => {
  return (
    <div>
      <HeaderApp />
      {props.children}
      <AppFooter />
    </div>
  )
}

export default Layout
