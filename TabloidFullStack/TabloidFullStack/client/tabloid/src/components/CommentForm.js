import React, { useState } from "react";
import { addComment } from "../Managers/CommentManager";
import { useNavigate } from "react-router-dom";

const CommentForm= ({postId})=> {
  const [comment, setComment] = useState({
    subject: "",
    content: "",
    CreateDateTime:"",
    PostId:"",
    userProfileId: 1, // fetch it from your authentication system?
  });

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    
  const localAppUser = localStorage.setItem("userProfile");
  const appUserObject = JSON.parse(localAppUser);

    const commentToSendToAPI = {
      subject: comment.subject,
      content: comment.content,
      createDateTime: Date.now(),
      postId: postId, // Pass the postId received from the url? how? its in the controller/AppView
      userProfileId: appUserObject.id,
    };

    addComment(commentToSendToAPI) // Use the addComment function to add the comment
      .then(() => navigate("/")); // Redirect after adding the comment
  };

  return (
    <form className="comment-form">
      <h2 className="comment-form-title">Create a New Comment</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={comment.subject}
            onChange={(event) => setComment({ ...comment, subject: event.target.value })}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            value={comment.content}
            onChange={(event) => setComment({ ...comment, content: event.target.value })}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="userProfileId">User Profile ID:</label>
          <input
            type="number"
            id="userProfileId"
            value={comment.userProfileId}
            onChange={(event) => setComment({ ...comment, userProfileId: event.target.value })}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="createDateTime">Create Date Time:</label>
          <input
            type="datetime-local"
            id="createDateTime"
            value={comment.createDateTime}
            onChange={(event) => setComment({ ...comment, createDateTime: event.target.value })}
          />
        </div>
      </fieldset>
      <button onClick={(clickEvent) => handleSubmit(clickEvent)} className="btn btn-primary">
        Submit Comment
      </button>
    </form>
  );
}

export default CommentForm;
