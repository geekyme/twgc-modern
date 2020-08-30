import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"

const Title = styled.h2`
  margin: 0 0 30px 0;
  padding: 0;
  color: red;
  font-size: 30px;
`

export const IndexPageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <Title>{title}</Title>
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
