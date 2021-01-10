import React from 'react'
import AppFooter from './footer'
import HeaderApp from './headerApp'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <HeaderApp />
        {props.children}
      </div>
      <AppFooter />
    </div>
  )
}

export default Layout
