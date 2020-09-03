import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const PlainPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <main className="main wrap md">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </main>
    </Layout>
  )
}

PlainPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PlainPage

export const plainPageQuery = graphql`
  query PlainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
