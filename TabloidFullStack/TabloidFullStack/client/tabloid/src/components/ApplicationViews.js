import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import CommentList from "./CommentList";
import CategoryList from "./CategoryList";
import { Post } from "./Post/Post";
import { PostList } from "./Post/PostList";
import { PostDetails } from "./Post/PostDetails";



export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} /> 
          {/* route for the commentlist uses :postId ->using url parameter */}
      <Route path="/comments/:postId" element={<CommentList />} />
      <Route path="/category" element= {<CategoryList />} />
      <Route path="/posts" element= {<PostList />} />
      <Route path="/posts/:id" element= {<PostDetails/>} />
      </Routes>
   );
 
}
