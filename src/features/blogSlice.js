import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
  },

  reducers: {
    createBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
  },
});

export const blogSelector = (state) => state.blogs;
export const { createBlog } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
