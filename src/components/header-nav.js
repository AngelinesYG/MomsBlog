import React from 'react';

import {Link, graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout'
//import './header.module.scss'
import './header.module.scss'
import * as headerStyles from './header.module.scss'

const HeaderNav = () => {
   const data = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
               title
            }
         }
      } 
   `)
//    const navStyle = {
//       color: 'gold'
//    };
   return(
      <header-nav className={headerStyles.header}>
          <nav>
         <h3><Link className={headerStyles.initials} to="/"> 
            {data.site.siteMetadata.title}
         </Link></h3>
         
         <ul className={headerStyles.navList}>
         <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
            </li>
         <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blogs">Our Blogs</Link>
            </li>
         <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about-contact">About/Contact Us</Link>
            </li>
         <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/login">Login</Link>
            </li>
         <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/signup">Register</Link>
            </li> 
         </ul>
         </nav>
      </header-nav>
   )
}
export default HeaderNav;