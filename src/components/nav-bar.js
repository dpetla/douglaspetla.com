import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedIn
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  return (
    <nav className="flex justify-end uppercase font-display text-xs font-extrabold tracking-wider py-2">
      <Link
        className="px-1 md:px-3 lg:px-5 py-3 shadow-none hover:opacity-75"
        to="/"
      >
        Home
      </Link>
      <Link
        className="px-1 md:px-3 lg:mx-5 py-3 shadow-none hover:opacity-75"
        to="/about"
      >
        About
      </Link>
      <Link
        className="px-1 md:px-3 lg:mx-5 py-3 shadow-none hover:opacity-75"
        to="/blog"
      >
        Blog
      </Link>
      <a
        className="px-1 md:px-3 lg:mx-5 py-3 shadow-none hover:opacity-75"
        href={`https://www.linkedin.com/in/${social.linkedIn}/`}
      >
        LinkedIn
      </a>
      <a
        className="px-1 md:px-3 lg:mx-5 py-3 shadow-none hover:opacity-75"
        href={`https://github.com/${social.github}`}
      >
        GitHub
      </a>
      <a
        className="px-1 md:px-3 lg:mx-5 py-3 shadow-none hover:opacity-75"
        href={`https://twitter.com/${social.twitter}`}
      >
        Twitter
      </a>
    </nav>
  )
}

export default NavBar
