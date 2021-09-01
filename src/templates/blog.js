import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

// export const query = graphql`
//     query {
//         allMarkdownRemark {
//             edges {
//                 node {
//                     frontmatter {
//                         title
//                         Author
                    
//                     }
//                     html
//                 }
//             }
//         }
//     }    
// `
export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}){
            title
            author
            publishedDate(formatString: "MMMM Do, YYYY")
        }
    }
`

const Blog = (props) =>{
    return (
        <Layout>
            <h2>{props.data.contentfulBlogPost.title}</h2>
            <h4>{props.data.contentfulBlogPost.author}</h4>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
        </Layout>
    )
}

export default Blog