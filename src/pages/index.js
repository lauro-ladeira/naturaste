import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/home/Header/Header"
import NossoProduto from "../components/home/NossoProduto/NossoProduto"
import NossaHistoria from "../components/home/NossaHistoria/NossaHistoria"
import Qualidade from "../components/home/Qualidade/Qualidade"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <NossoProduto />
    <NossaHistoria />
    <Qualidade />
  </Layout>
)

export default IndexPage
