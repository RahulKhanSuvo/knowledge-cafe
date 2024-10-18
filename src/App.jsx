import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };
  return (
    <>
      <main className="container mx-auto">
        <Header></Header>
        <div className="grid md:grid-cols-4 gap-6">
          <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
