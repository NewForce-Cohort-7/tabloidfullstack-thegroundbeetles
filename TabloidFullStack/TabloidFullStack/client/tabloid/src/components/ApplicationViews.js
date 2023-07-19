import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import ViewTags from "./Tags/ViewTags";
import CommentList from "./CommentList";

export default function ApplicationViews() {

 return(
      <Routes>
        
        <Route path="/" element={<Hello />} />
        <Route path="/tags" element={<ViewTags />} >
        </Route>

        {/* route for the commentlist uses :postId ->using url parameter */}
      <Route path="/comments/:postId" element={<CommentList />} />
      </Routes>

      
   );
 
}
