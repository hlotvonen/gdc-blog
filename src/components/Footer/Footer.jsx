import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="notice-container">{copyright}</div>
        <a
          href="https://glyphdrawing.club/"
          alt="GlyphDrawing.Club"
          rel="noreferrer noopener"
          target="_blank"
        >
          <button>Open GlyphDrawing.Club &#8599;</button>
        </a>
      </footer>
    );
  }
}

export default Footer;
