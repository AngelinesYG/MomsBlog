const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, getNode, actions}) =>{
    const {createNodeField} = actions
    
    if (node.internal.type === 'MarkdownRemark'){
        console.log(JSON.stringify(node, undefined, 4))


        const slug = createFilePath({node, getNode, basePath: `md`})

        createNodeField({
            node, 
            name: 'slug', 
            value: slug
        })
    }
}

exports.createPages = async ({graphql, actions})=>{
    const {createPage} = actions 
    const blogTemplate = path.resolve(`./src/templates/blog.js`)
    const response = await graphql(`
        query {
            allMardownRemark{
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `)
    response.data.allMarkdownRemark.edges.forEach((edge => { 
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.id}`,
            context: {
                id: edge.node.id
            }
        })
    })      
}