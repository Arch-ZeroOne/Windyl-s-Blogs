import React, { useRef } from "react";
import PostsCard from "./PostsCard";
import axios from "axios";
export default function Posts() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Form() {
  const titleRef = useRef();
  const imageRef = useRef();
  const descRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const image = imageRef.current.files[0];

    getImageUrl(image, titleRef.current.value, descRef.current.value);
  };

  return (
    <form
      className="flex flex-col items-center gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col items-center gap-2">
        <label>Post Title</label>
        <input
          type="text"
          placeholder="Title"
          className="input input-neutral"
          ref={titleRef}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label>Post Image</label>
        <input
          type="file"
          className="file-input file-input-primary"
          ref={imageRef}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label>Post Description</label>
        <textarea
          placeholder="Description"
          className="textarea textarea-neutral"
          ref={descRef}
        ></textarea>
      </div>

      <button className="btn btn-soft btn-primary">Add Post</button>
    </form>
  );
}

async function getImageUrl(image, title, description) {
  try {
    if (!image) {
      return;
    }

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "blog_images");
    data.append("cloud_name", "dwuelxoyn");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dwuelxoyn/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const response = await res.json();
    const { url } = response;
    addPost(url, title, description);
  } catch (error) {
    console.log("Error occured in getImageUrl", error);
  }
}

function addPost(url, title, description) {
  const payload = {
    url,
    title,
    description,
  };
  axios
    .post("http://127.0.0.1:8000/api/addPost", payload)
    .then((response) => {
      title = "";
      description = "";
    })
    .catch((error) => {
      console.log("Error occured in addPost", error);
    });
}

function Table() {
  return <div></div>;
}
