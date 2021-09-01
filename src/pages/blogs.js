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
                {data.allContentfulBlogPost.edges.map((edge) =>{
                    return (
                        <li className={blogStyles.post}>
                            
                                <h2>{edge.node.title}</h2>
                                
                            
                                <h4>By: {edge.node.author}</h4>
                                <p>{edge.node.publishedDate}</p>
                                
                        </li>
                    )
                })}
            </ol>
        </Layout>

    )
}
export default Blogs