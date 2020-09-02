import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"

export default function FaqSidebar({ title, data, ...props }) {
  const [heading, ...other] = data

  return (
    <Location>
      {({ location }) => {
        return (
          <aside className="aside">
            <section className="section">
              <Link to={heading.node.frontmatter.path} activeClassName="active">
                <h2 className="section_title">
                  {heading.node.frontmatter.title}
                </h2>
              </Link>
              <section {...props}>
                {other.map(({ node }) => (
                  <>
                    <Link
                      activeClassName="active"
                      className="toc_parent"
                      to={node.frontmatter.path}
                    >
                      <h3 className="section_link">{node.frontmatter.title}</h3>
                    </Link>
                    <nav
                      data-text={node.frontmatter.path}
                      className={
                        "toc " +
                        (location.pathname === node.frontmatter.path
                          ? "toc_active"
                          : "")
                      }
                    >
                      <ul>
                        {node.headings.map(h => (
                          <li className="toc_item">
                            <Link className="toc_link">{h.value}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </>
                ))}
              </section>
            </section>
          </aside>
        )
      }}
    </Location>
  )
}
