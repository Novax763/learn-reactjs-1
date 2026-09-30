import { Link } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contextApps/postsContexts";



export default function PostsList() {
    const posts = useContext(postsContext)
    let postsList = posts.map((pos) => {
        return (
          <Link to={`/posts/postsDetails/${pos.id}`} key={pos.id}>
            <div
              style={{
                marginTop: "10px",
                backgroundColor: "orange",
                padding: "20px",
              }}
            >
              <h1> {pos.title} </h1>
            </div>
          </Link>
        );
    })
  return (
    <> 
        {postsList}
    </>
  )
}
