import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const IndexPageTemplate = ({ html }) => {
  return <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
}

const ApplicationFaqPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate html={post.html} />
    </Layout>
  )
}

ApplicationFaqPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ApplicationFaqPage

export const applicationFaqPageQuery = graphql`
  query ApplicationFaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
