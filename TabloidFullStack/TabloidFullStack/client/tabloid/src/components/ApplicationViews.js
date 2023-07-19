import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import ViewTags from "./Tags/ViewTags";

export default function ApplicationViews() {

 return(
      <Routes>
        
        <Route path="/" element={<Hello />} />

        <Route path="/tags" element={<ViewTags />} >
        </Route>

      </Routes>

      
   );
 
}
