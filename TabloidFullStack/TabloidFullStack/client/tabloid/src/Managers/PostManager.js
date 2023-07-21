

const baseUrl = '/api/post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

export const GetCommentsByPost= (postId)=> {
  return fetch(`api/Comment/GetCommentsByPost?postId=${postId}`) 
    .then((res) => res.json())
};

 export const getPostById =(id) => {
  return fetch (`${baseUrl}/${id}`).then((res)=> res.json())
 };