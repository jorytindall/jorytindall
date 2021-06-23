import React from 'react'
import { graphql } from 'gatsby'

// Components
import { Layout } from "../../components/layout"
import { H1 } from "../../components/typography"

const Music = ({ data }) => {
    const musicProject = data.musicProject
    return (
        <Layout>
            <H1>{musicProject.title}</H1>
        </Layout>
    )
}

export default Music

export const query = graphql`
    query MusicQuery($id: String!) {
        musicProject: sanityMusicProject(id: { eq: $id }) {
            title
            id
            slug {
                current
            }
        }
    }
`