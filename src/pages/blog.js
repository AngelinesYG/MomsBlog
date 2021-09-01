import * as React from 'react'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'




const Blog = (props) =>{
    return (
        <Layout>
            <h2>{props.data.contentfulBlogPost.title}</h2>
            <h4>{props.data.contentfulBlogPost.author}</h4>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
        </Layout>
    )
}

export default Blog