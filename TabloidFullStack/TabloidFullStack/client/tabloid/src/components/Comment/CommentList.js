import React, { useState, useEffect } from "react";
import { GetCommentsByPost } from "../../Managers/CommentManager";
import { DeleteCommentsById } from "../../Managers/CommentManager";
import {Comment} from "./Comment";
import { useParams } from "react-router-dom";


const CommentList = () => {
  const [comments, setComments] = useState([]);

  /* use useParams to retrieve the postId from the URL parameter*/
  const { id } = useParams();
 



// const handleCommentDelete = (commentId) => {
//   DeleteCommentsById (commentId).then(() => navigate(`/posts/${id}`)
// )}

  const fetchCommentsByPost = () => {
    GetCommentsByPost(id)
      .then((allComments) => setComments(allComments))
      .catch((error) => console.error("Error fetching comments:", error));
  };


  useEffect(() => {
    fetchCommentsByPost();
  }, [id]);

  const handleDeleteComment = (commentId) => {
    DeleteCommentsById(commentId)
      .then(() => {
        // After deletion, refresh the comments list
        fetchCommentsByPost();
      })
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {comments.map((comment) => (
            <>
            <Comment 
            key={comment.id} 
            comment={comment}
            handleDeleteCommentFnc={() => handleDeleteComment(comment.id)} // If had used syntax:  onDelete={handleDeleteComment(comment.id)} would be  function will be called immediately when the Comment component renders, and the return value (which is expected to be a function) will be passed as the onDelete prop vs  function is invoked only when the onDelete event occurs (i.e., when the "Delete" button is clicked).
            />
            
            </>
            
            // <Comment key={comment.id} comment={comment} onDelete={handleCommentDelete}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentList;

// const fetchCommentsByPost = () => {
//   GetCommentsByPost(id)
//   .then((allComments) => {
//     if (Array.isArray(allComments)) {
//       setComments(allComments);
//     } else {
//       console.error("Error: Comments data is not an array");
//       console.log("API response:", allComments);
//     }
//   })
//   .catch((error) => console.error("Error fetching comments:", error));
//   }