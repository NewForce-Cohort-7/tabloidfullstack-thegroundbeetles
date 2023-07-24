import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import CommentList from "./CommentList";
import CategoryList from "./CategoryList";
import { PostList } from "./Post/PostList";
import { PostDetails } from "./Post/PostDetails";
import { ViewTags } from "./Tags/ViewTags";
import CommentForm from "./CommentForm";

export default function ApplicationViews() {

 return(
      <Routes>
      
      <Route path="/" element={<Hello />} /> 
          {/* route for the commentlist uses :postId ->using url parameter */}
      {/* <Route path="/comments/:postId" element={<CommentList />} /> */}

          /*No idea if this is what the url will resemble*/
      <Route path="/posts/:id/comments" element={<CommentForm />} />
      <Route path="/category" element= {<CategoryList />} />
      <Route path="/posts" element= {<PostList />} />
      <Route path="/posts/:id" element= {<PostDetails/>} />
      <Route path="/tags" element={<ViewTags />}/>
      </Routes>

   );
 
}
