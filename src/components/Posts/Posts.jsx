import React from "react";
import { useRouter } from "next/router";
import PostItem from "../PostItem/PostItem";
import { useEffect, useState } from "react";
import axios from "axios";

const Posts = (props) => {
  const [postData, setPostData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPostData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
      <div>{props.children}</div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Posts;
