import React from "react";


const baseUrl = "/api/Comment";


export const  GetCommentsByPost = (postId) => {
    return fetch(`${baseUrl}/GetCommentsByPost?postId=${postId}`) 
      .then((res) => res.json())
  };



  export const addComment = (singlePost) => { 
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singlePost),
    });
  }; 