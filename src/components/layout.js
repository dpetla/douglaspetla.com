import React from "react"
import NavBar from "../components/nav-bar"
import BackgroundImage from "gatsby-background-image"

export const backgroundImageFluid = graphql`
  fragment backgroundImageFluid on File {
    childImageSharp {
      fluid(quality: 50, maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const Layout = ({ title, subTitle, imageData, children }) => {
  return (
    <>
      <BackgroundImage
        Tag="header"
        className="font-display text-white text-center bg-center bg-cover bg-no-repeat px-10 lg:px-64 md:px-32 relative"
        fluid={imageData}
        backgroundColor={`#868e96`}
      >
        <NavBar />
        <div className="pt-20 sm:pt-40 md:pt-48 pb-20 sm:pb-40 md:pb-48">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2">{title}</h1>
          <span className="text-3xl font-light">{subTitle}</span>
        </div>
      </BackgroundImage>
      <main className="mx-auto max-w-3xl pb-16 pt-20 px-4 lg:px-0">
        {children}
      </main>
      <footer className="text-center border-t border-gray-300">
        <div className="mx-auto max-w-3xl my-16 antialiased">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Douglas Petla
        </div>
      </footer>
    </>
  )
}

export default Layout
