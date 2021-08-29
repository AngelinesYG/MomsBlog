import React from 'react'


const Footer = () => {
        return (
            <footer className="footer-container">
               <h5>About the App</h5>
                <p>Moms Blog was created by a mom for moms. With the idea that moms need a safe avenue to freely express themselves without being judged. By writing a blog about their experiences, moms can say whatever they need to say without fear of backlash and also find support from other moms experiencing or having experienced same or similar circumstances!</p>
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