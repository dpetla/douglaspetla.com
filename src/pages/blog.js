import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  const { blog } = data.site.siteMetadata.section
  const author = data.site.siteMetadata.author.name
  const imageData = data.image.childImageSharp.fluid
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={blog.title} subTitle={blog.subTitle} imageData={imageData}>
      <SEO title={blog.title} />
      <section className="flex flex-col space-y-6">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
              className="flex flex-col space-y-4 border-b pb-4"
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <h2 className="font-display text-4xl font-extrabold hover:text-blue-700">
                  {title}
                </h2>
              </Link>
              <h3 className="font-display text-2xl font-light antialiased">
                {node.frontmatter.subTitle}
              </h3>
              <small className="text-base font-serif text-gray-600 font-hairline antialiased">
                <span className="italic">
                  Posted by <strong>{author}</strong> on {node.frontmatter.date}
                </span>{" "}
                •
                <span role="img" aria-label="clock">
                  ⏱
                </span>
                {node.timeToRead} min
              </small>
              <section>
                {/* <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                /> */}
              </section>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    image: file(
      absolutePath: {
        regex: "/person-in-front-of-laptop-on-brown-wooden-table-2115217.jpg/"
      }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
        }
        section {
          blog {
            title
            subTitle
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            subTitle
            description
          }
          timeToRead
        }
      }
    }
  }
`
