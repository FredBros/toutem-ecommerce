import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { CarouselBlogPosts, BlogPostCard } from "../";
import { v4 as uuidv4 } from "uuid";
import { Card, Text } from "@nextui-org/react";
import Link from "next/link";

const BlogPostSection = () => {
     const { blogPostData } = useContext(DataContext);
  return (
    <>
      <div className="blog-section-wrap">
        <div className="title-blog-section">Blog</div>
        <div className="blog-post-section-sm">
          {blogPostData.map((post) => {
            return (
              <div className="card-wrap" key={uuidv4()}>
                <Link href="/">
                  <BlogPostCard post={post} />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="blog-post-section-l">
          <CarouselBlogPosts data={blogPostData} />
        </div>
      </div>
      <style jsx>{`
        .blog-section-wrap{
          background-color: transparent;
        }
         .blog-post-section-sm {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 50px;
        }
        .title-blog-section {
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          font-size: 3.12rem;
          color: var(--nextui-colors-primary);
          padding: 80px 0;
          text-align: center;
        }
        .card-wrap {
          width: 70%;
          aspect-ratio: 1/1;
          max-width: 375px;
          max-height: 386px;
        }
        .blog-post-section-l {
          display: none;
        }
        @media screen and (min-width: 960px) {
          .blog-post-section-sm {
            display: none;
          }
          .blog-post-section-l {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default BlogPostSection;
