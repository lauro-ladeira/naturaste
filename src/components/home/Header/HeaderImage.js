import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const HeaderImage = ({ className, children }) => {
  const { headerImage } = useStaticQuery(
    graphql`
      query {
        headerImage: file(
          relativePath: { eq: "caldo-de-cana-naturaste.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 300) {
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

export default HeaderImage