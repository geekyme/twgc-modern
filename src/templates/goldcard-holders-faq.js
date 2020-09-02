import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GoldCardFaqSidebar from "../components/GoldCardFaqSidebar"

const GoldcardHoldersFaqPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <main className="main wrap md">
        <div className="grid-auto">
          <GoldCardFaqSidebar />
          <div className="content">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

GoldcardHoldersFaqPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GoldcardHoldersFaqPage

export const goldcardHoldersFaqPageQuery = graphql`
  query GoldcardHoldersFaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
