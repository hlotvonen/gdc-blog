import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import RecentPosts from "./RecentPosts/RecentPosts";
import ByCategory from "./ByCategory/ByCategory";
import ByTag from "./ByTag/ByTag";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    const { config } = this.props;

    return (
      <aside className="sidebar">
        <section>
          <p>
            <a
              href="https://glyphdrawing.club/"
              alt="GlyphDrawing.Club"
              title="GlyphDrawing.Club"
              target="_blank"
            >
              GlyphDrawing.Club
            </a>{" "}
            is a contemporary text art & modular design tool.
          </p>
          <p>
            This blog is dedicated to all things GDC, modular design, ASCII art
            and text art.
          </p>
          <div className="header-gdc-link">
            <a
              href="https://glyphdrawing.club/"
              alt="GlyphDrawing.Club"
              title="GlyphDrawing.Club"
              target="_blank"
            >
              <button>Open GlyphDrawing.Club &#8599;</button>
            </a>
          </div>
        </section>
        <section>
          <h5>
            <svg
              x="0"
              y="0"
              viewBox="0 0 800 800"
              fill="#ec9c04"
              shapeRendering="crispEdges"
              className="icon"
            >
              <path d="M400 200C510 200 600 290 600 400C600 510 510 600 400 600C290 600 200 510 200 400C200 290 290 200 400 200ZM0 0L800 0L800 400C800 250 700 200 400 200C100 200 0 250 0 400ZM0 800L0 400C0 550 100 600 400 600C700 600 800 550 800 400L800 800Z"></path>
            </svg>
            More of Glyph Drawing Club
          </h5>
          <UserLinks config={config} labeled />
        </section>
        <section>
          <h5>
            <svg
              x="0"
              y="0"
              viewBox="0 0 800 800"
              fill="#ec9c04"
              shapeRendering="crispEdges"
              className="icon"
            >
              <path d="M500 600C550 600 600 650 600 700C600 750 550 800 500 800C450 800 400 750 400 700C400 650 450 600 500 600ZM100 200C150 200 200 250 200 300C200 350 150 400 100 400C50 400 0 350 0 300C0 250 50 200 100 200ZM300 0C350 0 400 50 400 100C400 150 350 200 300 200C250 200 200 150 200 100C200 50 250 0 300 0ZM100 600C150 600 200 650 200 700C200 750 150 800 100 800C50 800 0 750 0 700C0 650 50 600 100 600ZM300 400C350 400 400 450 400 500C400 550 350 600 300 600C250 600 200 550 200 500C200 450 250 400 300 400ZM500 200C550 200 600 250 600 300C600 350 550 400 500 400C450 400 400 350 400 300C400 250 450 200 500 200ZM700 0C750 0 800 50 800 100C800 150 750 200 700 200C650 200 600 150 600 100C600 50 650 0 700 0ZM700 400C750 400 800 450 800 500C800 550 750 600 700 600C650 600 600 550 600 500C600 450 650 400 700 400Z"></path>
            </svg>
            Recent posts
          </h5>
          <RecentPosts />
        </section>
        <section>
          <h5>
            <svg
              x="0"
              y="0"
              viewBox="0 0 800 800"
              fill="#ec9c04"
              shapeRendering="crispEdges"
              className="icon"
            >
              <path d="M400 0L800 200L800 600L400 800L0 600L0 200Z"></path>
            </svg>
            Browse by category
          </h5>
          <ByCategory />
        </section>
        <section>
          <h5>
            <svg
              x="0"
              y="0"
              viewBox="0 0 800 800"
              fill="#ec9c04"
              shapeRendering="crispEdges"
              className="icon"
            >
              <path d="M400 300C450 300 500 350 500 400C500 450 450 500 400 500C350 500 300 450 300 400C300 350 350 300 400 300ZM0 400L200 400L200 600L400 600L400 800L0 800ZM400 0L800 0L800 400L600 400L600 200L400 200ZM600 400L800 400C800 621 621 800 400 800L400 600C510 600 600 510 600 400ZM200 400L0 400C0 179 179 0 400 0L400 200C290 200 200 290 200 400Z"></path>
            </svg>
            Browse by tag
          </h5>
          <ByTag />
        </section>
      </aside>
    );
  }
}

export default SideBar;
