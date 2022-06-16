import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./homepage.module.css";
import { blogSelector } from "../features/blogSlice";
import { useSelector } from "react-redux";
import logo from "../img/blog.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  const blogs = useSelector(blogSelector);

  return (
    <div className={style.container}>
      <header>
        <h2>Bloger's Spot</h2>
        <div>
          <button
            onClick={() => {
              console.log(blogs);
              navigate("/createblog");
            }}
          >
            Create New Blog
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              console.log(blogs);
              navigate("/login");
            }}
          >
            Sign in
          </button>
        </div>
      </header>
      <main className={style.blogs}>
        <img src={logo} alt="logo" />
        {blogs.map((data, id) => (
          <div className={style.blogContainer}>
            <h1 key={id}>{data.name}</h1>
            <p>{data.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomePage;
