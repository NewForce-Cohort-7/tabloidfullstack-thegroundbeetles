import React, { useState, useEffect } from "react";
import { GetCommentsByPost } from "../../Managers/CommentManager";
import {Comment} from "./Comment";
import { useParams } from "react-router-dom";
import { DeleteCommentsById } from "../../Managers/CommentManager";
import { useNavigate } from "react-router-dom";
import DeleteCommentForm from "./DeleteCommentForm";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  /* use useParams to retrieve the postId from the URL parameter*/
  const { id } = useParams();
  const navigate = useNavigate();



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

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {comments.map((comment) => (
            <>
            <Comment key={comment.id} comment={comment}/>
            <DeleteCommentForm key={comment.id} comment={comment}/>
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