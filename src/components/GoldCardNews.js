import React from "react"

import LinkIcon from "../images/link.svg"
import { StaticQuery, graphql, Link } from "gatsby"

export default function GoldCardNews({ data }) {
  const limitContent = 8

  return (
    <StaticQuery
      query={graphql`
        query GoldCardNewsQuery {
          markdownRemark(frontmatter: { titleId: { eq: "gold-card-news" } }) {
            frontmatter {
              titleLink
              titleId
              title
              list {
                date
                link
                text
              }
            }
          }
        }
      `}
      render={data => (
        <section className="section latestNews">
          <h2
            id={data.markdownRemark.frontmatter.titleId}
            className="link_owner"
          >
            {data.markdownRemark.frontmatter.title}
            <a
              className="link icon"
              href={data.markdownRemark.frontmatter.titleLink}
            >
              <img src={LinkIcon} alt="link icon" />
            </a>
          </h2>
          <ul id="lastestNewsList">
            {data.markdownRemark.frontmatter.list
              .slice(0, limitContent)
              .map(item => (
                <li key={item.link}>
                  <time dateTime={item.date}>{item.date}</time>{" "}
                  <a href={item.link} target="_blank" rel="noopener nofollow">
                    {item.text}
                  </a>
                </li>
              ))}
            <li>
              <Link to="/news">Read More</Link>
            </li>
          </ul>
        </section>
      )}
    />
  )
}
