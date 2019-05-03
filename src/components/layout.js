import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
            margin: `0 auto`,
            maxWidth: 1100,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          {children}
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
