import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FaqSidebar from "./FaqSidebar"

export default function GoldCardFaqSidebar(props) {
  return (
    <StaticQuery
      query={graphql`
        query GoldCardFaqSidebar {
          allMarkdownRemark(
            filter: {
              frontmatter: { templateKey: { eq: "goldcard-holders-faq" } }
            }
            sort: { order: ASC, fields: frontmatter___weight }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  path
                }
                headings {
                  value
                }
              }
            }
          }
        }
      `}
      render={data => (
        <FaqSidebar data={data.allMarkdownRemark.edges} {...props} />
      )}
    />
  )
}
