import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1>Hello...</h1>
      <p>
        My name is Douglas Petla, and I am an engineer that found a passion in
        software development and transitioned to working full-time as a software
        developer. Currently, I spend my days building amazing web applications
        and learning about the latest technologies.
      </p>
      <p>
        Lately, I've been working mostly with front-end development with
        Javascript, Typescript, and Angular, and some backend using Java and
        Spring boot.
      </p>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
