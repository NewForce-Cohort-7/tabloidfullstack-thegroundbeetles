import React, { useState } from "react";

const DeleteButton = ({ handleDeleteCommentFnc }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteButtonClick = () => {
    handleDeleteCommentFnc();
    setConfirmDelete(false);
  };

  if (confirmDelete) {
    return (
      <div>
        <p>Are you sure you want to delete this comment?</p>
        <button onClick={handleDeleteButtonClick}>Delete</button>
        <button onClick={() => setConfirmDelete(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <button onClick={() => setConfirmDelete(true)}>Delete Comment</button>
  );
};

export default DeleteButton;





























// import React from "react";
// import { Card, CardBody } from "reactstrap";
// import { useParams } from "react-router-dom";
// import { DeleteCommentsById } from "../../Managers/CommentManager";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";


// const DeleteCommentForm = ({ comment }) => {

//     const { id } = useParams();
//     const navigate = useNavigate();

//     const handleDelete = () => {
//          DeleteCommentsById (id).then(() => navigate(`/posts/${id}`)
//           )}

//   return (
//     <Card className="m-4">
//       <h1>Are you Sure You Wish To Delete This Comment?</h1>
      
//         <button onClick={handleDelete}>Delete</button>
//         <button><Link to={`/posts/${comment.post.id}/comments/${comment.id}/delete`
// }>Cancel</Link>
// </button>
     
//     </Card>
//   );
// };

// export default DeleteCommentForm;
