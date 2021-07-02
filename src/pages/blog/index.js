import React from 'react'
import { Layout } from '../../components/layout'

const Blog = () => {

    const seo = {
        title: 'Blog'
    }

    return (
        <Layout seo={seo}>
            <p>This is the blog</p>
        </Layout>
    )
}

export default Blog