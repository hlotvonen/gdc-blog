import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import _ from "lodash";

export default () => (
  <StaticQuery
    query={graphql`
      query CategoryQuery {
        allMarkdownRemark {
          group(field: frontmatter___category) {
            category: fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {/* Your post list here. */
        data.allMarkdownRemark.group.map((post) => (
          <ul key={post.category}>
            <Link
              className="tag"
              to={`/categories/${_.kebabCase(post.category)}`}
            >
              <li>
                {post.category} ({post.totalCount})
              </li>
            </Link>
          </ul>
        ))}
      </div>
    )}
  />
);
