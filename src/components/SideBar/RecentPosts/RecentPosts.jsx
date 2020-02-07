import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allMarkdownRemark(
          sort: { fields: [fields___date], order: DESC }
          limit: 5
        ) {
          edges {
            node {
              fields {
                slug
                date(formatString: "MMMM DD, YYYY")
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {/* Your post list here. */
        data.allMarkdownRemark.edges.map((post) => (
          <ul key={post.node.frontmatter.title}>
            <Link to={post.node.fields.slug}>
              <li>{post.node.frontmatter.title}</li>
            </Link>
          </ul>
        ))}
      </div>
    )}
  />
);
