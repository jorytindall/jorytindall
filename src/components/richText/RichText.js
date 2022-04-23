import React from 'react'
import clientConfig from '../../../clientConfig'
import { PortableText } from '@portabletext/react'
import Components from "./Components"

const RichText = ({ value }) => {
    return (
        <PortableText value={value._rawContent} components={Components} {...clientConfig} />
    )
}

export default RichText