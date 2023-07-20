import React from "react";

const baseUrl = '/api/post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};


export const getPost = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json());
  };
  