import React from 'react' 
import Layout from '../components/layout'
import * as aboutStyles from './about.modules.scss'

const AboutContact = () =>{
    return(
        <Layout>
            <div className={aboutStyles.post}>
              <h1 className={aboutStyles.devMe}>💻 About the Developer 👩🏽‍💻</h1>
             <div>
             <h4>I am a mother to four amazing boys, who is filled with a passion for writing and creativity. Aside from my love for developing useful apps, I enjoy spending time with my children, listening to the calming sound of waves and rain drops, and a good family movie every now and then.</h4>
             <h5>
             <a href="mailto:angelinesyg@gmail.com">Email me 📧 🤓!</a>
             </h5>
             </div>
           </div>
        </Layout>
            
    )
}
export default AboutContact