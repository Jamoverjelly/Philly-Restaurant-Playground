import React from "react";
import { relative } from "path";

const Search = () => (
  <input
    style={{
      borderRadius: `4px`,
      boxShadow: `none`,
      padding: `8px 12px`,
      border: `none`,
      background: `#fff`,
      margin: 0,
      height: `36px`,
      lineHeight: `20px`,
      boxSizing: `border-box`,
      fontFamily: `Helvetica`,
      fontSize: `18px`
    }}
    type="text"
    placeholder="Find food"
  />
);

export default Search;
