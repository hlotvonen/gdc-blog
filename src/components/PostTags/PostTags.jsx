import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./PostTags.css";

function TagsIcon() {
  return (
    <svg
      x="0"
      y="0"
      viewBox="0 0 800 800"
      fill="#ec9c04"
      shapeRendering="crispEdges"
    >
      <path d="M400 300C450 300 500 350 500 400C500 450 450 500 400 500C350 500 300 450 300 400C300 350 350 300 400 300ZM0 400L200 400L200 600L400 600L400 800L0 800ZM400 0L800 0L800 400L600 400L600 200L400 200ZM600 400L800 400C800 621 621 800 400 800L400 600C510 600 600 510 600 400ZM200 400L0 400C0 179 179 0 400 0L400 200C290 200 200 290 200 400Z"></path>
    </svg>
  );
}

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags ? <TagsIcon /> : ""}
        {tags &&
          tags.map((tag) => (
            <Link className="tag" key={tag} to={`/tags/${_.kebabCase(tag)}`}>
              {tag}
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
