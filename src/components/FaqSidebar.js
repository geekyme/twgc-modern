import React from "react"
import { Link } from "gatsby"

export default function FaqSidebar({ title, data, ...props }) {
  const [heading, ...other] = data

  return (
    <aside className="aside">
      <section className="section">
        <Link to={heading.node.frontmatter.path} activeClassName="active">
          <h2 className="section_title">{heading.node.frontmatter.title}</h2>
        </Link>
        <section {...props}>
          {other.map(({ node }) => (
            <div>
              <Link
                activeClassName="active"
                className="toc_parent"
                to={node.frontmatter.path}
              >
                <h3 className="section_link">{node.frontmatter.title}</h3>
              </Link>
              <nav className="toc">
                <ul>
                  {node.headings.map(h => (
                    <li className="toc_item">
                      <Link className="toc_link">{h.value}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </section>
      </section>
    </aside>
  )
}
