import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import CommentList from "./CommentList";
import CategoryList from "./CategoryList";

import CategoryForm from "./CategoryForm";
import { Post } from "./Post/Post";
import { PostList } from "./Post/PostList";
import { NewTagForm } from "./Tags/AddTag";
import { PostDetails } from "./Post/PostDetails";
import { ViewTags } from "./Tags/ViewTags";
import { PostForm } from "./Post/PostForm";
import { UserPosts } from "./Post/UserPosts";
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
      <Route path="/category/add" element={<CategoryForm />} />
      <Route path="/posts" element= {<PostList />} />
      <Route path="/posts/:id" element= {<PostDetails/>} />
      <Route path="/tags" element={<ViewTags />}/>
      <Route path="/posts/add" element={<PostForm />} />
      <Route path="/my-posts" element={<UserPosts/>} />
      <Route path="/tags/add" element={<NewTagForm />}/>
      </Routes>

   );
 
}
