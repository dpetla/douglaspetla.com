import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav className="flex justify-end uppercase font-display text-xs font-extrabold tracking-wider py-5">
      <Link className="mx-1 md:mx-3 lg:mx-5 shadow-none" to="/">
        Home
      </Link>
      <Link className="mx-1 md:mx-3 lg:mx-5 shadow-none" to="/about">
        About
      </Link>
      <Link className="mx-1 md:mx-3 lg:mx-5 shadow-none" to="/blog">
        Blog
      </Link>
      <a
        className="mx-1 md:mx-3 lg:mx-5 shadow-none"
        href="https://www.linkedin.com/in/douglaspetla/"
      >
        LinkedIn
      </a>
      <a
        className="mx-1 md:mx-3 lg:mx-5 shadow-none"
        href="https://github.com/dpetla"
      >
        GitHub
      </a>
      <a
        className="mx-1 md:mx-3 lg:mx-5 shadow-none"
        href="https://twitter.com/douglaspetla"
      >
        GitHub
      </a>
    </nav>
  )
}

export default NavBar
