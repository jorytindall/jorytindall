import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from "../components/layout"
import { ModuleRenderer } from "../components/moduleRenderer/ModuleRenderer"
import { PageTitle } from "../components/pageTitle"
import { H1 } from "../components/typography"

const Page = ({ data }) => {
    const page = data.page
    return (
        <Layout seo={page}>
            {
                page.megaHeadline !== null ? 
                <PageTitle
                    title={page.title}
                    megaTitle={page.megaHeadline}
                /> : null
            }
            {page.megaHeadline === null ? <H1>{page.title}</H1> : null}
            {page.moduleContent && <ModuleRenderer modules={page.moduleContent} />}
        </Layout>
    )
}

export default Page

export const query = graphql`
    query PageQuery($id: String!) {
        page: sanityPage(id: { eq: $id }) {
            title
            id
            showTitle
            megaHeadline
            slug {
                current
            }
            moduleContent {
                ... on SanityRichText {
                    _key
                    _type
                    _rawContent(resolveReferences: { maxDepth: 5 })
                }
                ... on SanityPortfolioList {
                    _key
                    _type
                    items {
                        item {
                            _key
                            title
                            client
                            slug {
                                current
                            }
                            featuredImage {
                                    alternativeText
                                    asset {
                                        gatsbyImageData(
                                            layout: CONSTRAINED,
                                            placeholder: DOMINANT_COLOR,
                                            fit: FILL,
                                        )
                                    }
                                }
                            }
                    }
                }
                ... on SanityForm {
                    _key
                    _type
                    method
                    netlify
                    title
                    fields {
                        ... on SanityInput {
                            _key
                            _type
                            label
                            placeholder
                            type
                        }
                        ... on SanitySubmit {
                            _key
                            _type
                            text
                        }
                        ... on SanityTextarea {
                            _key
                            _type
                            label
                            name
                            placeholder
                        }
                    }
                    action {
                        _type
                        slug {
                            current
                        }
                    }
                }
            }
        }
    }
`