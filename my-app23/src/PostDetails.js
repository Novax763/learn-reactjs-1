import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { postsContext } from "./contextApps/postsContexts";



export default function PostDetails() {
    const posts = useContext(postsContext) 
    const {postId} = useParams()

    const post = posts.find((p) => {
        return p.id == postId;
    })

    // console.log(post)
    if (post) {
         return (
           <>
             <h1> page post details : {post.id + 1} </h1>
             <div
               style={{
                 marginTop: "10px",
                 backgroundColor: "orange",
                 padding: "20px",
               }}
             >
               <h2>{post.title}</h2>

               <p> {post.body} </p>
             </div>
           </>
         );
    }else {
        return ( <h1> The post with id: {postId} is not exist </h1> )
    }
}
