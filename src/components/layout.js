import React from "react"
import NavBar from "../components/nav-bar"
import BackgroundImage from "gatsby-background-image"

const Layout = ({ title, subTitle, imageData, children }) => {
  return (
    <>
      <BackgroundImage
        Tag="header"
        className="font-display text-white text-center bg-center bg-cover bg-no-repeat px-10 lg:px-64 md:px-32 relative"
        fluid={imageData}
        backgroundColor={`#868e96`}
      >
        {/* <div className="absolute top-0 left-0 h-full w-full opacity-50 bg-gray-700"></div> TODO overlay behind text */}
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
        <div className="mx-auto max-w-3xl my-16">
          Made with <span role="img">❤️</span> by Douglas Petla
        </div>
      </footer>
    </>
  )
}

export default Layout
