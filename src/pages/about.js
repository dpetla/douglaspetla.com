import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
  const { about } = data.site.siteMetadata.section
  const imageData = data.image.childImageSharp.fluid

  return (
    <Layout title={about.title} subTitle={about.subTitle} imageData={imageData}>
      <SEO title={about.title} />
      <section className="space-y-6">
        <h1 className="text-4xl mt-8 mb-2 font-extrabold font-display">
          Hello...
        </h1>
        <article className="font-light text-xl font-display space-y-6">
          <p>
            My name is Douglas Petla, and I am an engineer that found a passion
            in programming and transitioned to working full-time as a software
            developer. Currently, I spend my days building amazing web
            applications and learning about the latest technologies.
          </p>
          <p>
            Lately, I've been working mostly with Angular, React, and some
            Node.js.
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    image: file(
      absolutePath: {
        regex: "/architecture-buildings-business-city-374870.jpg/"
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
        section {
          about {
            title
            subTitle
          }
        }
      }
    }
  }
`
