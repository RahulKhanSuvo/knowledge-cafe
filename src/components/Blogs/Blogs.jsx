import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:col-span-3">
      <h3>Blogs: {blogs.length}</h3>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
