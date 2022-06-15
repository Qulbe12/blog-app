import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/createblog" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
