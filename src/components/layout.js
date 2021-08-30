import React from 'react'

import Footer from './footer'
import HeaderNav from './header-nav'
import '../styles/index.scss'

const Layout = (props) =>{
    return (
        <div>
            <HeaderNav />
            {props.children}
            <Footer />
        </div>
    )
}
export default Layout