import React, { useState, useEffect } from "react";
import { GetCommentsByPost } from "../Managers/CommentManager";
import {Comment} from "./Comment";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  /* use useParams to retrieve the postId from the URL parameter*/
  const { postId } = useParams();

  const fetchCommentsByPost = () => {
    GetCommentsByPost(postId)
      .then((allComments) => setComments(allComments))
      .catch((error) => console.error("Error fetching comments:", error));
  };

  useEffect(() => {
    fetchCommentsByPost();
  }, [postId]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentList;
