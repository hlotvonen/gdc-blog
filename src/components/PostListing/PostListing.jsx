import React from "react";
import { Link } from "gatsby";
import PostTags from "../PostTags/PostTags";
import PostDate from "../PostDate/PostDate";
import PostCategory from "../PostCategory/PostCategory";
import "./PostListing.css";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map((post) => (
          <div className="postListing" key={post.title}>
            <Link to={post.path}>
              <h1>{post.title}</h1>
            </Link>
            <div className="post-metaInfo">
              <PostDate date={post.date} />
              <PostCategory category={post.category} />
              <PostTags tags={post.tags} />
            </div>
            <div className="listing-image">
              <img src={post.cover} />
            </div>
            <div className="listing-text">
              <p>{post.excerpt}</p>
              <Link className="readMore" to={post.path}>
                <button>More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
