import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog }) => {
  const {
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
          <button>
            <CiBookmark />
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
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
