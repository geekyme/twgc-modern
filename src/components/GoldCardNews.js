import React from "react"

import LinkIcon from "../icons/link.svg"
import { StaticQuery, graphql, Link } from "gatsby"

export default function GoldCardNews({ limitContent }) {
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
      render={data => {
        let list = data.markdownRemark.frontmatter.list

        if (limitContent !== null) {
          list = list.slice(0, limitContent)
        }

        return (
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
              {list.map(item => (
                <li key={item.link}>
                  <time dateTime={item.date}>{item.date}</time>{" "}
                  <a href={item.link} target="_blank" rel="noopener nofollow">
                    {item.text}
                  </a>
                </li>
              ))}
              {limitContent && (
                <li>
                  <Link to="/news">Read More</Link>
                </li>
              )}
            </ul>
          </section>
        )
      }}
    />
  )
}
