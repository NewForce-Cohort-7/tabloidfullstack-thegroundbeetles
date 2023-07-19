import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import CommentList from "./CommentList";


export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />
          {/* route for the commentlist uses :postId ->using url parameter */}
      <Route path="/comments/:postId" element={<CommentList />} />
      </Routes>
   );
 
}
