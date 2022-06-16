import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./blogpage.module.css";
import { createBlog } from "../features/blogSlice";
import { useDispatch } from "react-redux";

const BlogPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    description: "",
  });

  const onChangeCall = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <h2 className={style.blogH2}>Write Your Blogs</h2>
        <input
          type="text"
          name="name"
          placeholder="Title Of Blog"
          onChange={onChangeCall}
          className={style.blogInput}
        />

        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Write Your Blog here"
          onChange={onChangeCall}
          className={style.blogTextarea}
        />
        <div className={style.buttonContainer}>
          <button
            className={style.blogButton}
            onClick={() => {
              navigate("/");
              console.log(state);
            }}
          >
            Home Page
          </button>
          <button
            className={style.blogButton}
            onClick={() => {
              dispatch(createBlog(state));
              navigate("/");
              console.log(state);
            }}
          >
            Create Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
