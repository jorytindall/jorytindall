import React from 'react'
import { graphql } from 'gatsby'

// Components
import { Layout }from "../../components/layout"
import { H1 } from "../../components/typography"
import { ModuleRenderer } from '../../components/moduleRenderer/ModuleRenderer'

const Post = ({ data }) => {
    const post = data.post
    return (
        <Layout>
            <H1>{post.title}</H1>
            {post.moduleContent &&  <ModuleRenderer modules={post.modulecontent} />}
        </Layout>
    )
}

export default Post

export const query = graphql`
    query PostQuery($id: String!) {
        post: sanityPost(id: { eq: $id }) {
            title
            id
            slug {
                current
            }
            publishedDate
        }
    }
`