import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "naturaste-logo.png" }) {
          childImageSharp {
            fixed (width: 172, height: 54) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Link to="/">
      <Img fixed={logoImage.childImageSharp.fixed} />
    </Link>
  )
}

export default Logo
