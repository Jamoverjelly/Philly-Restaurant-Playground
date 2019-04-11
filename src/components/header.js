import { Link } from "gatsby";
import Search from "./search";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `mediumvioletred`,
      height: `3em`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        display: `flex`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.45em 1.0875em`
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: `1.5em`,
          paddingTop: `0.2em`,
          paddingRight: `2em`
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Search />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
