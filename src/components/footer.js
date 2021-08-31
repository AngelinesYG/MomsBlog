import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    description
                }
            }
        }
    `)
        return (
            <footer className="footer-container">
               <h5>About the App</h5>
                <p>{data.site.siteMetadata.description}</p>
                <h5>Thanks for visiting!</h5>
                <ul>
                    <li>
                        <p>By:</p>
                        <p>Angelines Yaport-Garcia © 2021</p>
                        <a href="https://www.linkedin.com/in/angelines-yaport-garcia/" target="https://www.linkedin.com/in/angelines-yaport-garcia/">
                            <i className="fab fa-linkedin" aria-hidden="false"></i>
                        </a>
                        <a href="mailto:angelinesyg@gmail.com" target="mailto:angelinesyg@gmail.com">
                            <i className="far fa-envelope-open" aria-hidden="false"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        )
}

export default Footer