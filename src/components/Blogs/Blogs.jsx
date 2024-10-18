import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleAddToBookmarks, handelMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:col-span-3">
      <h3>Blogs: {blogs.length}</h3>
      {blogs.map((blog) => (
        <Blog
          handelMarkAsRead={handelMarkAsRead}
          handleAddToBookmarks={handleAddToBookmarks}
          blog={blog}
          key={blog.id}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func.isRequired,
  handelMarkAsRead: PropTypes.func,
};
export default Blogs;
