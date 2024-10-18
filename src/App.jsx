import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className="container mx-auto">
        <Header></Header>
        <div className="grid md:grid-cols-4 gap-6">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
