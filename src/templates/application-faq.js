import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ApplicationFaqSidebar from "../components/ApplicationFaqSidebar"

const ApplicationFaqPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <main className="main wrap md">
        <div className="grid-auto">
          <ApplicationFaqSidebar />
          <div className="content">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </main>
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
      frontmatter {
        title
      }
    }
  }
`
