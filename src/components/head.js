import { useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from 'gatsby'

const Head = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)
    return (
    <Helmet title="MB"/>
    )
}

export default Head
    