import React, { useState } from "react";
import { addComment } from "../Managers/CommentManager";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// import { Button } from 'react-bootstrap';
// import Modal  from 'react-bootstrap/Modal';
// import { Form } from 'react-bootstrap'; // To use Form.Group and Form.Control components

const CommentForm= ()=> {
  const [comment, setComment] = useState({
    subject: "",
    content: "",
    CreateDateTime:"",
    PostId:"",
    userProfileId: 1, // fetch it from your authentication system?
  });

  const navigate = useNavigate();
  const { id } = useParams();
//   const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    
  const localAppUser = localStorage.getItem("userProfile");
  const appUserObject = JSON.parse(localAppUser);

    const commentToSendToAPI = {
      subject: comment.subject,
      content: comment.content,
    //   createDateTime: Date.now(),
      postId: +id, // Pass the postId  from the url? how? + sign converts it from string to int in object
      userProfileId: appUserObject.id,
    };

    addComment(commentToSendToAPI) // Use the addComment function to add the comment
      .then(() => navigate(`/posts/${id}`)); // Redirect after adding the comment
  };


//   return (
//     <>
//       <button onClick={handleShowModal} className="btn btn-primary">
//         Create a New Comment
//       </button>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Create a New Comment</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>Subject:</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={comment.subject}
//                 onChange={(event) =>
//                   setComment({ ...comment, subject: event.target.value })
//                 }
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Content:</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={comment.content}
//                 onChange={(event) =>
//                   setComment({ ...comment, content: event.target.value })
//                 }
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Save changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );

  return (
    <form className="comment-form" onSubmit={(clickEvent) => handleSubmit(clickEvent)} >
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
      <button type="submit" className="btn btn-primary">
        Submit Comment
      </button>
    </form>
  );
}

export default CommentForm;
