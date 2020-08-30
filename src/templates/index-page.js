import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

export const IndexPageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <IndexPageTemplate title={post.frontmatter.title} content={post.html} />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
