import { useEffect, useState } from "react";
import axios from "axios";
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import Link from "next/link";

const PostDetails = () => {
  const [post, setPost] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDeletePost = async (postId) => {
    const url = `http://localhost:5000/api/posts/${postId}`;

    try {
      await axios.delete(url);
      alert(`Post was deleted successfully.`);
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  useEffect(() => {
    const selectedPost = JSON.parse(sessionStorage.getItem("selectedPost"));
    setPost(selectedPost);
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app-post__cover'>
      <Link className='app-post__selected_back-link' to href='/'>
        GO BACK
      </Link>
      <div className='app-post__selected'>
        <img
          className='app-post__selected_image'
          src={`/static/${post.picture}`}
        />
        <h1 className='app-post__selected_title'>{post.title}</h1>
        <p className='app-post__selected_summary'>{post.summary}</p>
        <p className='app-post__selected_text'>{post.text}</p>

        <div className='app-post__selected-actions'>
          <button
            onClick={() => handleDeletePost(post._id)}
            className='app-post__selected-actions_button app-post__selected-actions_button--delete'
          >
            Delete
          </button>
          <button
            onClick={openModal}
            className='app-post__selected-actions_button app-post__selected-actions_button--update'
          >
            Edit
          </button>
        </div>

        <ModalWindow
          postId={post._id}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default PostDetails;