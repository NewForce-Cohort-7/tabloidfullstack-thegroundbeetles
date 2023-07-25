import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import CommentList from "./Comment/CommentList";
import CategoryList from "./CategoryList";
import DeleteCommentForm from "./Comment/DeleteCommentForm";
import CategoryForm from "./CategoryForm";
import { Post } from "./Post/Post";
import { PostList } from "./Post/PostList";
import { PostDetails } from "./Post/PostDetails";
import { ViewTags } from "./Tags/ViewTags";
import CommentForm from "./Comment/CommentForm";

export default function ApplicationViews() {

 return(
      <Routes>
      
      <Route path="/" element={<Hello />} /> 
          {/* route for the commentlist uses :postId ->using url parameter */}
      {/* <Route path="/comments/:postId" element={<CommentList />} /> */}

          /*No idea if this is what the url will resemble*/
      <Route path="/posts/:id/comments" element={<CommentForm />} />
      <Route path="/category" element= {<CategoryList />} />
      <Route path="/category/add" element={<CategoryForm />} />
      <Route path="/posts" element= {<PostList />} />
      <Route path="/posts/:id" element= {<PostDetails/>} />
      <Route path="/comments/:id/delete" element={<DeleteCommentForm/>} />
      <Route path="/tags" element={<ViewTags />}/>
      </Routes>

   );
 
}
