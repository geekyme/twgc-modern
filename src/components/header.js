import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mainHeader">
    <nav className="mainNavigation">
      <Link className="mainNavigation_logoLink" to="/">
        <picture>
          <source
            srcSet="https://taiwangoldcard.com/images/gc-light.svg"
            media="(prefers-color-scheme: dark)"
          />
          🇹🇼 Taiwan Gold Card
        </picture>
      </Link>
      <div className="search">
        <label htmlFor="search" className="search_label"></label>
        <input
          type="search"
          className="search_field"
          placeholder="Search..."
          id="search"
        />
        <div className="search_results"></div>
      </div>
      <ul className="mainNavigation_menu">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://visafinder.tw/gold-card-qualification/"
            target="_blank"
            rel="noopener nofollow"
          >
            <span>Do I qualify for the Gold Card?</span>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/application-faq">
            <span>Application Process</span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://taiwangoldcard.com/goldcard-holders-faq/"
          >
            <span>Life in Taiwan</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
