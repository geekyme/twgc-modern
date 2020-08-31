import React from "react"

import LinkIcon from "../images/link.svg"

export default function GoldCardNews({ data }) {
  return (
    <section className="section latestNews">
      <h2 id={data.titleId} className="link_owner">
        {data.title}
        <a className="link icon" href={data.titleLink}>
          <img src={LinkIcon} alt="link icon" />
        </a>
      </h2>
      <ul id="lastestNewsList">
        {data.list.map(item => (
          <li key={item.link}>
            <time dateTime={item.date}>{item.date}</time>{" "}
            <a href={item.link} target="_blank" rel="noopener nofollow">
              {item.text}
            </a>
          </li>
        ))}
        <li>
          <a href="news">Read More</a>
        </li>
      </ul>
    </section>
  )
}
