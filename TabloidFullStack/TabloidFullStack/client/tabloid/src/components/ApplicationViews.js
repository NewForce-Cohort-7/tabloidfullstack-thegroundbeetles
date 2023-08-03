import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import CommentList from "./Comment/CommentList";
import CategoryList from "./CategoryList";
import DeleteCommentForm from "./Comment/DeleteButton";
import CategoryForm from "./CategoryForm";
import { DeleteCategory } from "./CategoryDelete";
import { Post } from "./Post/Post";
import { PostList } from "./Post/PostList";
import { NewTagForm } from "./Tags/AddTag";
import { PostDetails } from "./Post/PostDetails";
import { ViewTags } from "./Tags/ViewTags";
import { PostForm } from "./Post/PostForm";
import { UserPosts } from "./Post/UserPosts";

import { PostEdit } from "./Post/PostEdit";
import CommentForm from "./Comment/CommentForm";
import { EditCategory } from "./CategoryEdit";


export default function ApplicationViews() {

 return(
      <Routes>
      
      <Route path="/" element={<Hello />} /> 
          {/* route for the commentlist uses :postId ->using url parameter */}
      {/* <Route path="/comments/:postId" element={<CommentList />} /> */}

          /*No idea if this is what the url will resemble*/
      <Route path="/posts/:id/comments" element={<CommentForm/>} />
      <Route path="/category" element= {<CategoryList />} />
      <Route path="/category/add" element={<CategoryForm />} />
      <Route path="/category/delete/:categoryId" element={<DeleteCategory />} />
      <Route path="/category/edit/:categoryId" element={<EditCategory />} />
      <Route path="/posts" element= {<PostList />} />
      <Route path="/posts/:id" element= {<PostDetails/>} />
      <Route path="/posts/:postId/comments/:commentId/delete" element={<DeleteCommentForm/>} />
      <Route path="/tags" element={<ViewTags />}/>
      <Route path="/posts/add" element={<PostForm />} />
      <Route path="/my-posts" element={<UserPosts/>} />
      <Route path="/tags/add" element={<NewTagForm />}/>
      <Route path="/posts/edit/:postId" element={<PostEdit />} />
      </Routes>

   );
 
}
