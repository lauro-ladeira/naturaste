import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const LogoImage = ({ className, children }) => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(
          relativePath: { eq: "logo-naturaste.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 248) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={logoImage.childImageSharp.fluid} 
      id="gbitest"
      role="img"
      aria-label="gbitest"
      fadeIn={`soft`}
      background="red"
    >
      {children}
    </BackgroundImage>
  )
}

export default LogoImage