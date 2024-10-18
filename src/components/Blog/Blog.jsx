import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmarks, handelMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-8 border-b-2 pb-3">
      <img className="w-full rounded-lg" src={cover} alt="" />
      <div className="mt-8 flex justify-between items-center">
        <div
          className="flex items-center gap-4
        "
        >
          <img className="h-14 w-14" src={author_img} alt="" />
          <div>
            <h2 className="font-bold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p> {reading_time} min read</p>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-red-600 text-2xl"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="font-bold text-4xl my-5">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handelMarkAsRead(id, reading_time)}
        className="focus:text-[#6047EC] border-[#6047EC] border-b"
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handelMarkAsRead: PropTypes.func,
};
export default Blog;
