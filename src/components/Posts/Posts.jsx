import React from "react";
import { useRouter } from "next/router";
import PostItem from "../PostItem/PostItem";
import { useEffect, useState } from "react";
import axios from "axios";

const Posts = ({ postData }) => {
  const router = useRouter();

  const handleClick = (postId) => {
    const selectedPost = postData.find((post) => post._id === postId);
    router.push(`/posts/${postId}`, undefined, { shallow: true });
    sessionStorage.setItem("selectedPost", JSON.stringify(selectedPost));
  };

  return (
    <div className='app-posts'>
      <div className='app-posts__list'>
        {postData &&
          postData.map((post) => (
            <PostItem
              key={post._id}
              post={post}
              onClick={() => handleClick(post._id)}
            />
          ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}api/posts`
    );
    const postData = response.data;
    return {
      props: {
        postData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return {
      props: {
        postData: [],
      },
    };
  }
}

export default Posts;
