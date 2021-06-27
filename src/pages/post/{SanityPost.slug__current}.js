import React from 'react'
import { graphql } from 'gatsby'

// Components
import { Layout }from "../../components/layout"
import { H1 } from "../../components/typography"
import { PortableText } from '../../components/richText'

const Post = ({ data }) => {
    const post = data.post

    return (
        <Layout seo={post}>
            <H1>{post.title}</H1>
            {post.content && <PortableText blocks={post.content} />}
        </Layout>
    )
}

export default Post

export const query = graphql`
    query PostQuery($id: String!) {
        post: sanityPost(id: { eq: $id }) {
            _key
            id
            title
            publishedDate
            content {
                _rawContent(resolveReferences: { maxDepth: 5 })
            }
            featuredImage {
                alternativeText
                asset {
                    gatsbyImageData
                }
            }
            slug {
                current
            }
        }
    }
`