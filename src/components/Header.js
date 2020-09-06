import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SearchBar from "./SearchBar"
import Icon from "../icons/gc-light.svg"

const Header = ({ siteTitle }) => (
  <header className="mainHeader">
    <nav className="mainNavigation">
      <Link className="mainNavigation_logoLink" to="/">
        <picture>
          <source srcSet={Icon} media="(prefers-color-scheme: dark)" />
          🇹🇼 Taiwan Gold Card
        </picture>
      </Link>
      <SearchBar />
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
          <Link className="nav-link" to="/application-faq/">
            <span>Application Process</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/goldcard-holders-faq/">
            <span>Life in Taiwan</span>
          </Link>
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
