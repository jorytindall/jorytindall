import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { formatDateTime } from '../../utils/datetimeFormat'
import { Layout } from '../../components/layout'
import { H1, Paragraph } from '../../components/typography'
import { Container } from '../../components/layout'
import { PortableText } from '../../components/richText'
import { TextArrow } from '../../components/button'

const Event = ({ data }) => {
    const event = data.event
    return (
        <Layout seo={event}>
            <Container>
                <GatsbyImage image={event.image.asset.gatsbyImageData} />
                <H1>{event.title}</H1>
                <Paragraph>{formatDateTime(event.date)}</Paragraph>
                <PortableText blocks={event.description} />
                <TextArrow text='More information' link={event.url} />
            </Container>
        </Layout>
    )
}

export default Event

export const query = graphql`
    query EventQuery($id: String!) {
        event: sanityEvent(id: { eq: $id }) {
            slug {
                current
            }
            title
            id
            date
            location
            url
            description {
                ... on SanityRichText {
                    _key
                    _type
                    _rawContent(resolveReferences: { maxDepth: 5 })
                }
            }
            image {
                alternativeText
                asset {
                    gatsbyImageData(
                        placeholder: BLURRED,
                        fit: FILL,
                        width: 1000,
                        height: 500,
                    )
                }
            }
        }
    }
`
