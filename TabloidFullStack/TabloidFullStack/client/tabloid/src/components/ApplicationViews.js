import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import ViewTags from "./Tags/ViewTags";
import CommentList from "./CommentList";
import CategoryList from "./CategoryList";

export default function ApplicationViews() {

 return(
      <Routes>
        
        <Route path="/" element={<Hello />} />
        <Route path="/tags" element={<ViewTags />} >
        </Route>

      {/* route for the commentlist uses :postId ->using url parameter */}
        <Route path="/" element={<Hello />} /> 
          {/* route for the commentlist uses :postId ->using url parameter */}
      <Route path="/comments/:postId" element={<CommentList />} />
      <Route path="/category" element= {<CategoryList />} />
      </Routes>

      
   );
 
}
