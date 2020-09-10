import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const HeaderBackground = ({ className, children }) => {
  const { headerImage } = useStaticQuery(
    graphql`
      query {
        headerImage: file(
          relativePath: { eq: "background-our-product.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1366) {
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
      fluid={headerImage.childImageSharp.fluid} 
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

export default HeaderBackground