import React from 'react'
import {Link} from 'gatsby' 

import Layout from '../components/layout'

const NotFound = () =>{
    return (
        <Layout>
        <h1>Not Found</h1>
        <p><Link to="/">Back to Home</Link></p>
        </Layout>
    )
}
export default NotFound