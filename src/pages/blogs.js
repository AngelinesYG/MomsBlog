// import { divide } from 'lodash'
import React from 'react' 
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import * as blogStyles from './blogs.module.scss'

const Blogs = () =>{
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate, 
                    order: DESC 
                }) 
                    {
                edges {
                    node {
                        title
                        slug
                        author
                        publishedDate(formatString: "MMMM Do, YYYY")
                        
                    }
                }
            }
        }
    `)
    console.log(data)
    return (
        <Layout>
            <h1>Our Blogs</h1>
            <ol className={blogStyles.posts}>
                {/* {data.allContentfulBlogPost.edges.map((edge) =>{
                    return ( */}
                    <h2><Link to="/blog">Boy Mom</Link></h2>
                    <h4>By: Super Mom</h4>
                    <p>May 19, 2021</p>
                    <br/>

                    <h2><Link to="/blog">So Spent</Link></h2>
                    <h4>By: Sexy Mamma</h4>
                    <p>May 20, 2021</p>
                    <br/> 

                    <h2><Link to="/blog">Amazing Moms</Link></h2>
                    <h4>By: Super Mom</h4>
                    <p>May 18, 2021</p>
                    <br/>
                        <li className={blogStyles.post}>
{/*                             

                                <h2>{edge.node.title}</h2>
                                <h4>By: {edge.node.author}</h4>
                                <p>{edge.node.publishedDate}</p> */}
                        
                         </li>
                   {/* )
                })} */}
            </ol>
        </Layout>

    )
}
export default Blogs