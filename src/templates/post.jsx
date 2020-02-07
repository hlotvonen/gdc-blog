import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import PostDate from "../components/PostDate/PostDate";
import PostCategory from "../components/PostCategory/PostCategory";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <article>
            <h1 className="mainTitle">{post.title}</h1>
            <div className="post-metaInfo">
              <PostDate date={post.date} />
              <PostCategory category={post.category} />
              <PostTags tags={post.tags} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </article>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date(formatString: "MMMM DD, YYYY")
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
