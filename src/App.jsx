import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmarks = (blog) => {
    const isAlreadyBookmarked = bookmarks.some(
      (bookmark) => bookmark.id === blog.id
    );
    if (isAlreadyBookmarked) {
      alert("This blog is already bookmarked");
      return;
    }
    setBookmarks([...bookmarks, blog]);
  };
  const handelMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <main className="container mx-auto">
        <Header></Header>
        <div className="grid md:grid-cols-4 gap-6">
          <Blogs
            handelMarkAsRead={handelMarkAsRead}
            handleAddToBookmarks={handleAddToBookmarks}
          ></Blogs>
          <Bookmarks
            readingTime={readingTime}
            bookmarks={bookmarks}
          ></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
