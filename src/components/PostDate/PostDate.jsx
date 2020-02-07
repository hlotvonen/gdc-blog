import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./PostDate.css";

class PostDate extends Component {
  render() {
    const { date } = this.props;
    return (
      <div className="post-date-container">
        <svg
          x="0"
          y="0"
          viewBox="0 0 800 800"
          fill="#ec9c04"
          shapeRendering="crispEdges"
        >
          <path d="M400 400C700 400 800 500 800 800L0 800C0 500 100 400 400 400ZM0 0L800 0C800 300 700 400 400 400C100 400 0 300 0 0Z"></path>
        </svg>
        {date}
      </div>
    );
  }
}

export default PostDate;
