import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import GoldCardNews from "../components/GoldCardNews"

const NewsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <main className="main wrap md">
        <div className="content">
          <GoldCardNews />
        </div>
      </main>
    </Layout>
  )
}

NewsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NewsPage

export const newsPageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
