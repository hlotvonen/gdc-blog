import React, { Component } from "react";
import "./UserLinks.css";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map((link) => (
      <div key={link.label}>
        <a href={link.url}>
          <button type="button">{labeled ? link.label : ""}</button> —
          {link.label === "GitHub"
            ? "it's open source!"
            : link.label === "Instagram"
            ? "lots of examples"
            : link.label === "Email"
            ? "contact me for questions or work"
            : ""}
        </a>
      </div>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
