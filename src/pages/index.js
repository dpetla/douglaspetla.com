import React from "react"
import NavBar from "../components/nav-bar"
import "./index.css"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <div className="home__bg--gradient flex flex-col h-screen text-white px-10 lg:px-64 md:px-32">
      <NavBar />
      <main className="flex flex-col flex-grow justify-center">
        <h2 className="text-headline leading-normal font-bold font-display">
          Douglas Petla
        </h2>
        <h3 className="text-5xl leading-normal font-bold font-display">
          Software Developer
        </h3>
      </main>
    </div>
    // <Layout location={location} title={siteTitle}>
    //   <SEO title="All posts" />
    //   <Bio />
    //   {posts.map(({ node }) => {
    //     const title = node.frontmatter.title || node.fields.slug
    //     return (
    //       <article key={node.fields.slug}>
    //         <header>
    //           <h3
    //             style={{
    //               marginBottom: rhythm(1 / 4),
    //             }}
    //           >
    //             <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
    //               {title}
    //             </Link>
    //           </h3>
    //           <small>{node.frontmatter.date}</small>
    //         </header>
    //         <section>
    //           <p
    //             dangerouslySetInnerHTML={{
    //               __html: node.frontmatter.description || node.excerpt,
    //             }}
    //           />
    //         </section>
    //       </article>
    //     )
    //   })}
    // </Layout>
  )
}

export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
