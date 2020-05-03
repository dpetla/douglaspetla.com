import React from "react"
import { graphql } from "gatsby"
import NavBar from "../components/nav-bar"
import SEO from "../components/seo"
import "./index.css"

const Home = ({ data }) => {
  const { name, summary } = data.site.siteMetadata.author

  return (
    <div className="home__bg--gradient flex flex-col h-screen text-white px-10 lg:px-64 md:px-32">
      <SEO title="Home" />
      <NavBar />
      <main className="flex flex-col flex-grow justify-center">
        <h2 className="text-headline leading-normal font-bold font-display">
          {name}
        </h2>
        <h3 className="text-5xl leading-normal font-bold font-display">
          {summary}
        </h3>
      </main>
    </div>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
          summary
        }
      }
    }
  }
`
