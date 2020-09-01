import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TaiwanImage from "../images/taiwan-unsplash.jpeg"
import SectionApplicant from "../components/SectionApplicant"
import GoldCardNews from "../components/GoldCardNews"

export const IndexPageTemplate = ({
  newApplicant,
  existingApplicant,
  news,
}) => {
  return (
    <main className="main wrap md">
      <main className="home">
        <SectionApplicant
          data={newApplicant}
          className="section newApplicant"
        />
        <SectionApplicant
          data={existingApplicant}
          className="section existingApplicant"
        />
        <GoldCardNews data={news} />
        <section className="section homePicture">
          <img src={TaiwanImage} alt="Taiwan" />
        </section>
      </main>
    </main>
  )
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate {...post.frontmatter} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        news {
          title
          titleId
          titleLink
          list {
            date
            link
            text
          }
        }

        newApplicant {
          title
          list
          buttons {
            text
            link
          }
        }

        existingApplicant {
          title
          list
          buttons {
            text
            link
          }
        }
      }
    }
  }
`
