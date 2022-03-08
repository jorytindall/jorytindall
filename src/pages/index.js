import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { Layout } from "../components/layout"
import { H2, H4, Paragraph, AnimatedHeadline } from "../components/typography"
import { TextArrow } from "../components/button"

// Local
import { HeroContent, MainContent } from "../components/home"

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
        `design systems,`,
        `creative music,`,
        `video & motion,`,
        `brand expression.`
    ]

    return (
        <Layout seo={seo}>
            {/* <StyledBackground fluid={imageData} backgroundColor="var(--color-primary-main)">
                <HeroContent>
                    <div>
                        {skills.map(skill => {
                            return (<AnimatedHeadline color="var(--color-primary-main)" margin="0" lineHeight="1" textAlign="left">{skill}</AnimatedHeadline>)
                        })}
                    </div>
                </HeroContent>
            </StyledBackground> */}
            <MainContent>
                <H2 color="var(--color-primary-main)">Hey 🤘 My name is Jory Tindall.</H2>
                <H4 color="var(--color-primary-main)">I'm an empathetic interface and experience designer, polished video editor and motion designer, shredder of the saxophone, and entrepreneur based in Seattle, WA.</H4>
                <Paragraph>I'm currently helping to empower a broad range of designers and creative thinkers on the Design Systems and Framework team at <a href="https://www.t-mobile.com/" target="blank">T-Mobile</a>.</Paragraph>
                <Paragraph>You'll also find me leading the charge to democratize music education at <a href="https://downbeatacademy.com" target="blank">Downbeat Academy</a>, collaborating in the Seattle music scene, and teaching teaching music to the next generation of shredders.</Paragraph>
                <TextArrow
                    text='View my portfolio'
                    link='/portfolio'
                />
            </MainContent>
            {/* <Features /> */}
            <MainContent>
                <H2 color="var(--color-primary-main)">Want to know more?</H2>
                <Paragraph><Link to="/contact">Drop me a line,</Link> I'm always looking to meet new people and start up new collaborations.</Paragraph>
            </MainContent>
        </Layout>
    )
}

const StyledBackground = styled(BackgroundImage)`
    width: 100%;
    height: calc(100vh - 107px);
    transform: translateY(-107px);
`

export default Homepage