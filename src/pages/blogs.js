// import { divide } from 'lodash'
import React from 'react' 
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const Blogs = () =>{
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            Author
                        }
                        id
                    }
                }
            }
        }
    `)
    console.log(data)
    return (
        <Layout>
            <h1>Our Blogs</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) =>{
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <h3>{edge.node.frontmatter.Author}</h3>
                            <p>{edge.node.id}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>

    )
}
export default Blogs