import React from 'react'
import { graphql } from 'gatsby'

// Components
import { Layout } from "../../components/layout"
import { ModuleRenderer } from '../../components/moduleRenderer/ModuleRenderer'
import { HeroImage, Title } from "../../components/portfolio"

const Portfolio = ({ data }) => {
    const project = data.project
    return (
        <Layout seo={project}>
            <HeroImage 
                source={project.featuredImage.asset.gatsbyImageData}
                altText={project.featuredImage.alternativeText}
            />
            <Title
                title={project.title}
                client={project.client}
                projectTypes={project.types}
                roles={project.roles}
                tools={project.tools}
                timeline={project.timeline}
                overview={project.overview}
                link={project.externalLink}
            />
            {project.moduleContent && <ModuleRenderer modules={project.moduleContent} />}
        </Layout>
    )
}

export default Portfolio

export const query = graphql`
    query PortfolioProjectsQuery($id: String!) {
        project: sanityPortfolioProject(id: { eq: $id}) {
            title
            client
            tools
            timeline
            types
            overview
            externalLink
            id
            roles
            slug {
                current
            }
            featuredImage {
                alternativeText
                asset {
                    gatsbyImageData(
                        width: 2000,
                        placeholder: BLURRED,
                        fit: FILLMAX,
                    )
                }
            }
            moduleContent {
                ... on SanityBrandLogoBlock {
                    _key
                    _type
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
                ... on SanityFullWidthImage {
                    _key
                    _type
                    maxHeight
                    image {
                    alternativeText
                    asset {
                        gatsbyImageData(
                        fit: FILLMAX
                        formats: [AUTO, WEBP]
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        )
                    }
                    }
                }
                ...on SanityGallery {
                    _key
                    _type
                    columns
                    images {
                        _key
                        caption
                        alternativeText
                        asset {
                            _key
                            gatsbyImageData(
                                width: 2000,
                                placeholder: BLURRED,
                                fit: FILLMAX,
                            )                            
                        }
                    }
                }
                ... on SanityImpactBlock {
                    _key
                    _type
                }
                ... on SanityMainImage {
                    _key
                    _type
                }
                ... on SanityRichText {
                    _key
                    _type
                    alignment
                    textColor {
                        colors {
                            title
                            value
                        }
                    }
                    backgroundColor {
                        colors {
                            title
                            value
                        }
                    }
                    _rawContent(resolveReferences: { maxDepth: 5 })
                }
                ... on SanityResults {
                    _key
                    _type
                    title
                    description
                    resultItems {
                        _key
                        description
                        headline
                        metric
                        percentageDirection
                    }
                }
                ... on SanityFeatures {
                    _key
                    _type
                    columns
                    title
                    featureItems {
                        title
                        description
                        _key
                        image {
                            alternativeText
                            caption
                            asset {
                                _key
                                gatsbyImageData(
                                    width: 2000,
                                    placeholder: BLURRED,
                                    fit: FILLMAX,
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`