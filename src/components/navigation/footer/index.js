import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

// Components
import { LogoSymbol } from "../../brand"
import { Paragraph, InternalLink, ExternalLink } from "../../typography"

const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <div>
                    <Link to="/">
                        <LogoSymbol color="#005EFF" maxWidth="38px" />
                    </Link>
                    <Paragraph margin="1rem 0 0 0">Copyright &copy; Jory Tindall {new Date().getFullYear()}</Paragraph>
                </div>
                <div>
                    <InternalLink to="/about" margin="16px 0" color="var(--color-dark-main)">About</InternalLink>
                    <InternalLink to="/portfolio" margin="16px 0" color="var(--color-dark-main)">Portfolio</InternalLink>
                    <InternalLink to="/contact" margin="16px 0" color="var(--color-dark-main)">Contact</InternalLink>
                </div>
                <div>
                    <ExternalLink href="https://www.behance.net/jorytindall" margin="16px 0" color="var(--color-dark-main)">Behance</ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/jory-tindall/" margin="16px 0" color="var(--color-dark-main)">LinkedIn</ExternalLink>
                    <ExternalLink href="https://www.facebook.com/jorytindall.musician" margin="16px 0" color="var(--color-dark-main)">Facebook</ExternalLink>
                    <ExternalLink href="https://www.instagram.com/jorytindall/" margin="16px 0" color="var(--color-dark-main)">Instagram</ExternalLink>
                    <ExternalLink href="https://twitter.com/JoryTindall" margin="16px 0" color="var(--color-dark-main)">Twitter</ExternalLink>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.footer`
    background: var(--color-accent-01);
    max-width: 100vw;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 1440px;
    padding: 2.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "copyright copyright col1 col2";

    div:nth-child(1) {
        grid-area: copyright;
    } 

    div:nth-child(2) {
        grid-area: col1;
    }

    div:nth-child(3) {
        grid-area: col2;
    }

    div:nth-child(2), div:nth-child(3) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: var(--breakpoint-lg)) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: 
            "copyright copyright"
            "col1 col2";
        div:nth-child(1) {
            margin-bottom: 2.5rem;
        }
    }
`