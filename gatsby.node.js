
const path = require('path')


exports.createPages = async ({graphql, actions})=>{
    const {createPage} = actions 
    const blogTemplate = path.resolve(`./src/pages/blog.js`)
    const response = await graphql(`

        query {
            allContentfulBlogPost (
                sort: {
                fields: publishedDate,
                order: DESC
                }
                ) {
                edges {
                    node {
                        title
                        slug
                     author
                     publishedDate(formatString: "MMMM Do, YYYY")
                     body {
                        json
                        }
                    }
                }
            }
         }
    `)
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log(response)
    response.data.allContentfulBlogPost.edges.forEach((edge) => { 

        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                title: edge.node.title,
                slug: edge.node.slug,
                author: edge.node.author,
                publishedDate: edge.node.publishedDate,
                body: edge.node.body
            }
        })
    })      
}