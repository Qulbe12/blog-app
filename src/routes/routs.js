import BlogPage from "../components/BlogPage";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import SignUp from "../components/SignUp";

const routes = [
  {
    name: "home",
    path: "/",
    elemnt: <HomePage />,
  },
  {
    name: "blog page",
    path: "/blog",
    elemnt: <BlogPage />,
  },
  {
    name: "log in page",
    path: "/login",
    elemnt: <LoginPage />,
  },
  {
    name: "sign up",
    path: "/signup",
    elemnt: <SignUp />,
  },
];

export default routes;
