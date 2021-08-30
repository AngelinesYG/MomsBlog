import React from 'react';

import {Link} from 'gatsby';
import Layout from '../components/layout'

const HeaderNav = () => {
//    const navStyle = {
//       color: 'gold'
//    };
   return(
      <header-nav>
          <nav>
         <h3>Welcome to Moms Blog</h3>
         <ul className="nav-Links">
         <li><Link to="/">Home Page</Link></li>
         <li><Link to="/blogs">Our Blogs</Link></li>
         <li><Link to="/about-contact">About/Contact Us</Link></li>
         <li><Link to="/signup">Register</Link></li> 
         <li><Link to="/login">Login</Link></li>
         </ul>
         </nav>
      </header-nav>
   )
}
export default HeaderNav;