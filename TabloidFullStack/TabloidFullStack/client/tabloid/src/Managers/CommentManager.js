import React from "react";


const baseUrl = "/api/Comment";

export const  GetCommentsByPost = (postId) => {
    return fetch(`${baseUrl}/GetCommentsByPost?postId=${postId}`) 
      .then((res) => res.json())
  };