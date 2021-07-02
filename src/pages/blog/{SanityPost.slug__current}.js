import React from 'react'
import { graphql } from 'gatsby'

// Components
import { Layout }from "../../components/layout"
import { BlogTitle } from "../../components/blog/BlogTitle"
import { PortableText } from '../../components/richText'

const Post = ({ data }) => {
    const post = data.post

    return (
        <Layout seo={post}>
            <BlogTitle
                featuredImage={post.featuredImage}
                title={post.title}
                categories={post.categories}
            />
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
            categories {
                name
            }
            content {
                _rawContent(resolveReferences: { maxDepth: 5 })
            }
            featuredImage {
                alternativeText
                asset {
                    gatsbyImageData(
                        width: 480
                        height: 270
                        placeholder: BLURRED
                        formats: [ AUTO, WEBP ]
                        layout: CONSTRAINED
                    )
                }
            }
            slug {
                current
            }
        }
    }
`

