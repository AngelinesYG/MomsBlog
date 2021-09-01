import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as footerStyles from './footer.module.scss'


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
            <footer className={footerStyles.footer}>
               <h5>About the App</h5>
                <p>{data.site.siteMetadata.description}</p>
                <h5>Thanks for visiting!</h5>
                <ul>
                    <li>
                        <p>By:</p>
                        <p>Angelines Yaport-Garcia © 2021</p>
                        <a href="https://www.linkedin.com/in/angelines-yaport-garcia/" target="https://www.linkedin.com/in/angelines-yaport-garcia/">
                            LinkedIn</a>

                        <a href="mailto:angelinesyg@gmail.com" target="mailto:angelinesyg@gmail.com">Email</a>
                    </li>
                </ul>
            </footer>
        )
}

export default Footer