import React from 'react'
import clientConfig from '../../../clientConfig'
import BaserichText from '@sanity/block-content-to-react'
import Serializers from "./Serializers"

import { Container } from '../layout'

const PortableText = ({ blocks }) => {
    return (
        <Container>
            <BaserichText blocks={blocks._rawContent} serializers={Serializers} {...clientConfig} />
        </Container>
    )
}

export default PortableText