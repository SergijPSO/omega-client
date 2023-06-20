import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const PostItem = ({ post, onClick }) => {
  const [height, setHeight] = useState("3.5rem");
  const [rotate, setRotate] = useState(false);
  const { summary, picture, title } = post;

  const toggleHeight = () => {
    setHeight((prevHeight) => (prevHeight === "3.5rem" ? "100%" : "3.5rem"));
    setRotate((prevRotate) => !prevRotate);
  };

  return (
    <div className='app-post'>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${picture}`}
        alt='post image'
        className='app-post_image'
        onClick={onClick}
        width={300}
        height={350}
        layout='responsive'
      />
      <div className='app-post__description'>
        <h3 className='app-post_title' onClick={onClick}>{`${title}`}</h3>

        <p className='app-post_text' style={{ height }}>
          {`${summary}`}
        </p>

        <div className='app-post__buttons'>
          <button className='app-post__btn' onClick={toggleHeight}>
            <svg
              className='app-post__btn-icon'
              style={{
                transform: rotate ? "rotate(180deg)" : "none",
              }}
            >
              <use xlinkHref='./images/sprite.svg#arrow-down' />
            </svg>
            <span className='app-post__btn-text'>Show More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
