import "./App.css";
import { Route, Routes, Link } from 'react-router-dom'
import ContextAppsRoutes from "./ContextAppsRoutes";
import HomeRouteApps from "./HomeRouteApps";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { postsContext } from "./contextApps/postsContexts";
import PageNotFound from "./PageNotFound";
import NewPostDetails1 from "./NewPostDetails1";
import DelitePostDelaits from "./DelitePostDelaits";
import PostLayout from "./PostLayout";

let postsData = [
  {
    id: 0,
    title: "hello world",
    body: "this my page for me 'dfksdjfkjsdjfkjsdkfjks' ",
  },
  {
    id: 1,
    title: "hello Soufaine",
    body: "this my page for 'Soufaine' ",
  },
  {
    id: 2,
    title: "hello yarob",
    body: "this my page for 'Yarob' ",
  },
  {
    id: 3,
    title: "hello Reactjs",
    body: "this my page for 'Reactjs' ",
  },
];

function App() {
  // decalre variables. CSR 
  // Client Side Rendering
  return (
    <postsContext.Provider value={postsData}>
      <div className="App">
        <ul className="flex">
          {/*  Link  */}
          <Link to="/home">
            <button> Home </button>
          </Link>
          <Link to="/hello">
            <button> Hello </button>
          </Link>
          <Link to="/posts">
            <button> Posts </button>
          </Link>
          <Link to="">
            <button> {"<"} </button>
          </Link>
        </ul>

        {/* Routes */}
        <Routes>
          {/* Route */}
          <Route path="/hello" element={<h1> Soufaine </h1>} />
          <Route path="/home" element={<HomeRouteApps />} />
          <Route path="/posts" element={<PostLayout />}>
            <Route path="postsDetails/:postId" element={<PostDetails />} />
            <Route path="new" element={<NewPostDetails1 />} />
            <Route path="delete" element={<DelitePostDelaits />} />
            <Route index element={<PostsList />} />
          </Route>
          <Route path="/" element={<ContextAppsRoutes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
// CSR

// Client Side Rendering


// SPA

// Single Page Application (الصفحة الواحدة)

