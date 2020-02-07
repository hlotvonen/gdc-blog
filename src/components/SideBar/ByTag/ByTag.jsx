import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import _ from "lodash";

export default () => (
  <StaticQuery
    query={graphql`
      query TagsQuery {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            tags: fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {/* Your post list here. */
        data.allMarkdownRemark.group.map((post) => (
          <ul key={post.tags}>
            <Link className="tag" to={`/tags/${_.kebabCase(post.tags)}`}>
              <li>
                {post.tags} ({post.totalCount})
              </li>
            </Link>
          </ul>
        ))}
      </div>
    )}
  />
);
