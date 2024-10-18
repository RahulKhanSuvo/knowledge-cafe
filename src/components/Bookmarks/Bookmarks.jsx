const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bg-[#F3F3F3] rounded-lg px-6 py-4  mt-6">
      <h4>Bookmarked Blogs : {bookmarks.length}</h4>
    </div>
  );
};

export default Bookmarks;
