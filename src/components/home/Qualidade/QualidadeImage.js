import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const QualidadeImage = ({ className, children }) => {
  const { qualidadeImage } = useStaticQuery(
    graphql`
      query {
        qualidadeImage: file(
          relativePath: { eq: "imagem-qualidade.png" }
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
      fluid={qualidadeImage.childImageSharp.fluid}
      id="gbitest"
      role="img"
      aria-label="gbitest"
      fadeIn={`soft`}
    >
      {children}
    </BackgroundImage>
  )
}

export default QualidadeImage

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// const QualidadeImage = () => {
//   const { qualidadeImage } = useStaticQuery(
//     graphql`
//       query {
//         qualidadeImage: file(relativePath: { eq: "imagem-qualidade.png" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 300) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `
//   )

//   return <Img fluid={qualidadeImage.childImageSharp.fluid} />
// }

// export default QualidadeImage
