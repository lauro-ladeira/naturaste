import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/home/Header/Header"
import NossoProduto from "../components/home/NossoProduto/NossoProduto"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <NossoProduto />
  </Layout>
)

export default IndexPage
