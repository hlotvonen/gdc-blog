import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import RecentPosts from "../components/SideBar/RecentPosts/RecentPosts";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="404-container">
          <Helmet title={`404 | ${config.siteTitle}`} />
            <article>
                    <h1>404 | Sorry... page not found.</h1>
                    <p>
                        Check out one of these posts instead?
                    </p>
                    <section>
                        <h5>
                            Recent posts
                        </h5>
                        <RecentPosts />
                    </section>
            </article>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
