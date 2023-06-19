import { useState } from "react";
import axios from "axios";

const PostManagement = ({ postId }) => {
  console.log(postId);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpdatePost = async () => {
    const url = `http://localhost:5000/api/posts/${postId}`;
    const formData = new FormData();
    const title = document.getElementById("title").value;
    const summary = document.getElementById("summary").value;
    const text = document.getElementById("text").value;

    formData.append("_id", postId);
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("text", text);
    formData.append("picture", selectedFile);

    try {
      await axios.put(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Post was updated successfully!");
      window.location.href = "/";
      console.log(`Post with ID ${postId} updated successfully.`);
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  const handeleCreateNewPost = async (event) => {
    event.preventDefault();

    const url = "http://localhost:5000/api/posts";
    const formData = new FormData();

    const title = document.getElementById("title").value;
    const summary = document.getElementById("summary").value;
    const text = document.getElementById("text").value;

    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("text", text);
    formData.append("picture", selectedFile);

    try {
      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
      alert("Post was created successfully!`");
      window.location.href = "/";
      console.log("Post data posted successfully!");
    } catch (error) {
      console.error("Failed to post form data:", error);
    }
  };

  return (
    <div className='app-managment'>
      <form className='app-managment__form'>
        <fieldset className='app-managment__field'>
          <label className='app-managment_label' htmlFor='picture'>
            Image (.png) only
          </label>
          <fieldset className='app-managment__field app-managment__field--image'>
            <input
              className='app-managment_button app-managment_button--select'
              type='file'
              id='picture'
              onChange={handleFileChange}
            />
          </fieldset>
        </fieldset>

        <fieldset className='app-managment__field'>
          <label className='app-managment_label' htmlFor='title'>
            Title
          </label>
          <input className='app-managment_input' id='title' type='text' />
        </fieldset>
        <fieldset className='app-managment__field'>
          <label className='app-managment_label' htmlFor='summary'>
            Summary
          </label>
          <input className='app-managment_input' id='summary' type='text' />
        </fieldset>
        <fieldset className='app-managment__field'>
          <label className='app-managment_label' htmlFor='text'>
            Text
          </label>
          <textarea className='app-managment_textarea' id='text' type='text' />
        </fieldset>

        <fieldset className='app-managment__field app-managment__field--image'></fieldset>
        <fieldset className='app-managment__field app-managment__field--buttons'>
          <button
            onClick={handeleCreateNewPost}
            className='app-managment_button app-managment_button--create'
          >
            Create
          </button>

          <button
            onClick={handleUpdatePost}
            className='app-managment_button app-managment_button--update'
          >
            Update
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default PostManagement;
