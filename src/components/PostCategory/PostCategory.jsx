import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./PostCategory.css";

function CategoryIcon({ category }) {
  return (
    <>
      <svg
        x="0"
        y="0"
        viewBox="0 0 800 800"
        fill="#ec9c04"
        shapeRendering="crispEdges"
      >
        <path d="M400 0L800 200L800 600L400 800L0 600L0 200Z"></path>
      </svg>
      <Link
        className="tag"
        key={category}
        to={`/categories/${_.kebabCase(category)}`}
      >
        {category}
      </Link>
    </>
  );
}

class PostCategory extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="post-category-container">
        {category ? <CategoryIcon category={category} /> : ""}
      </div>
    );
  }
}

export default PostCategory;
