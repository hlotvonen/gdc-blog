import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="main-container">
          <SideBar config={config} />
          <main>{children}</main>
        </div>
        <Footer config={config} />
      </div>
    );
  }
}
