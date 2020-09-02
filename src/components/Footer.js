import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer className="mt-2 pt-2 pb-2">
    <div className="wrap">
      <p>
        <a href="/about">About us</a> | <a href="/terms">Terms</a> | Maintained
        by Gold Card Holders, not affiliated with any government departments,
        seek professional advice.
      </p>
    </div>
  </footer>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
