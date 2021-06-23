import React from 'react'
import { H1, H2, H3, H4, H5, H6, Paragraph } from "../typography"
import ResolvedLink from "./ResolvedLink"
import { Blockquote } from '../blockquote'

const Serializers = {
    types: {
        block: ({ node, children }) => {
            switch (node.style) {
                case `h1`: return <H1>{children}</H1>
                case `h2`: return <H2>{children}</H2>
                case `h3`: return <H3>{children}</H3>
                case `h4`: return <H4>{children}</H4>
                case `h5`: return <H5>{children}</H5>
                case `h6`: return <H6>{children}</H6>
                case `normal`: return <Paragraph primary>{children}</Paragraph>
                case `blockquote`: return <Blockquote text={children} />
                default: return <Paragraph primary>{children}</Paragraph>
            }
        },
    },
    marks: {
        internalLink: ({ mark, children }) => {
            return (
                <ResolvedLink data={mark}>{children}</ResolvedLink>
            )
        }
    }
}

export default Serializers