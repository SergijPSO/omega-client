import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PostItem from "../PostItem/PostItem";
import axios from "axios";

export default function Posts() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}api/posts`
      );
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (!data) {
    return <div className='app-loader'>Loading...</div>;
  }

  const handleClick = (postId) => {
    const selectedPost = data.find((post) => post._id === postId);
    router.push(`/posts/${postId}`, undefined, { shallow: true });
    sessionStorage.setItem("selectedPost", JSON.stringify(selectedPost));
  };

  return (
    <div className='app-posts'>
      <div className='app-posts__list'>
        {data &&
          data.map((post) => (
            <PostItem
              key={post._id}
              post={post}
              onClick={() => handleClick(post._id)}
            />
          ))}
      </div>
    </div>
  );
}
