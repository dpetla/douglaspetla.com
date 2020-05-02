import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const imageData = data.image.childImageSharp.fluid
  const { previous, next } = pageContext

  return (
    <Layout
      title={post.frontmatter.title}
      subTitle={post.frontmatter.description}
      imageData={imageData}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="markdown">
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer className="mt-12">
          <Bio />
        </footer>
      </section>

      <nav className="mt-12">
        <ul className="flex flex-wrap justify-between list-none p-0">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $headerImage: String) {
    site {
      siteMetadata {
        title
      }
    }
    image: file(absolutePath: { regex: $headerImage }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
