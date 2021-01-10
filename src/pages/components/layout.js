import React from 'react'
import AppFooter from './footer'
import HeaderApp from './headerApp'
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
