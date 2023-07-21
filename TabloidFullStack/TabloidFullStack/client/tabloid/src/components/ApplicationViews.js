import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import CommentList from "./CommentList";
import CategoryList from "./CategoryList";
import CommentForm from "./CommentForm";
import { Post } from "./Post/Post";
import { PostList } from "./Post/PostList";
import { PostDetails } from "./Post/PostDetails";


import { ViewTags } from "./Tags/ViewTags";

export default function ApplicationViews() {

 return(
      <Routes>
        
        <Route path="/" element={<Hello />} />
        

      {/* route for the commentlist uses :postId ->using url parameter */}
        <Route path="/" element={<Hello />} /> 
          {/* route for the commentlist uses :postId ->using url parameter */}
      <Route path="/comments/:postId" element={<CommentList />} />

          /*No idea if this is what the url will resemble*/
      <Route path="/post/comments/:postId" element={<CommentForm />} />

      <Route path="/category" element= {<CategoryList />} />
      <Route path="/posts" element= {<PostList />} />
      <Route path="/posts/:id" element= {<PostDetails/>} />
      <Route path="/tags" element={<ViewTags />}/>
      </Routes>

      
   );
 
}
