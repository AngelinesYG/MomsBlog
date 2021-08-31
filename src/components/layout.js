import React from 'react'

import Footer from './footer'
import HeaderNav from './header-nav'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = (props) =>{
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
            <HeaderNav />
            {props.children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout