import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { Layout } from "../components/layout"
import { H2, H4, Paragraph, AnimatedHeadline } from "../components/typography"

// Local
import { HeroContent, MainContent, Features } from "../components/home"

const Homepage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(name: { eq: "home-background-v1@2x"}) {
                    childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }      
        `
    )

    const imageData = data.file.childImageSharp.fluid

    const seo = {
        title: `Designer, musician, and educator`,
        description: `Home of designer, musician, and educator Jory Tindall.`
    }

    const skills = [
        `Visual design,`,
        `user experience,`,
        `musician,`,
        `design systems,`,
        `video & motion,`,
        `brand expression.`
    ]

    return (
        <Layout seo={seo}>
            <StyledBackground fluid={imageData} backgroundColor="var(--color-primary-main)">
                <HeroContent>
                    <div>
                        {skills.map(skill => {
                            return (<AnimatedHeadline color="var(--color-primary-main)" margin="0" lineHeight="1" textAlign="left">{skill}</AnimatedHeadline>)
                        })}
                    </div>
                </HeroContent>
            </StyledBackground>
            <MainContent>
                <H2 color="var(--color-primary-main)">Jory Tindall.</H2>
                <H4 color="var(--color-primary-main)">Empathetic interface and experience designer, polished video editor and motion designer, shredder of the saxophone, and entrepreneur based in Seattle, WA.</H4>
                <Paragraph>I'm currently building the <strike>next</strike> first platform enabling marketing teams to know what works and why across marketing channels at <a href="https://byjove.com" target="blank">Jove</a>.</Paragraph>
                <Paragraph>You'll also find me leading the charge to democratize music education at <a href="https://downbeatacademy.com" target="blank">Downbeat Academy</a>, collaborating in the Seattle music scene, and teaching teaching music to the next generation of shredders.</Paragraph>
            </MainContent>
            <Features />
            <MainContent>
                <H2 color="var(--color-primary-main)" textAlign="center">Want to know more?</H2>
                <Paragraph textAlign="center"><Link to="/contact">Drop me a line,</Link> I'm always looking to meet new people and start up new collaborations.</Paragraph>
            </MainContent>
        </Layout>
    )
}

const StyledBackground = styled(BackgroundImage)`
    width: 100%;
    height: calc(100vh - 250px);
`

export default Homepage