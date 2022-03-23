import React from 'react'
import clientConfig from '../../../clientConfig'
import BaserichText from '@sanity/block-content-to-react'
import Serializers from "./Serializers"

const PortableText = ({ blocks }) => {
    return (
        <BaserichText blocks={blocks._rawContent} serializers={Serializers} {...clientConfig} />
    )
}

export default PortableText