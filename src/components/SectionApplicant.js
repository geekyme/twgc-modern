import React from "react"

import LinkIcon from "../images/link.svg"

export default function SectionApplicant({ data, ...other }) {
  return (
    <section {...other}>
      <h2 id={data.titleId} className="link_owner">
        {data.title}
        <a className="link icon" href={data.titleLink}>
          <img src={LinkIcon} alt="link icon" />
        </a>
      </h2>
      <ul>
        {data.list.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
      {data.buttons.map(button => (
        <p key={button.link}>
          <a
            href={button.link}
            className="button "
            style={{ marginRight: "10px" }}
          >
            {button.text}
          </a>
        </p>
      ))}
    </section>
  )
}
