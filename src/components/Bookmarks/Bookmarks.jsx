import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="bg-[#F3F3F3] rounded-lg px-6 py-4  mt-6">
      <h2 className="text-[#6047EC] border p-4 rounded-lg b bg-[#EFECFD]">
        Spent time on read : {readingTime} min
      </h2>
      <h4>Bookmarked Blogs : {bookmarks.length}</h4>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
