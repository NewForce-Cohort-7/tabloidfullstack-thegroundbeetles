import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteCommentForm from "./DeleteCommentForm";
import { DeleteCommentsById } from "../../Managers/CommentManager";
import { useNavigate } from "react-router-dom";

export const Comment = ({ comment }) => {
//   const [showConfirmation, setShowConfirmation] = useState(false);
// const navigate = useNavigate ();

  // const handleDelete = () => {
  //  DeleteCommentsById (comment.id).then(() => navigate(`/posts/${id}`)
  //   )}
  //   // onDelete(comment.id);
  //   setShowConfirmation(false);
  

  // const handleCancel = () => {
  //   setShowConfirmation(false);
  // };

  // if (showConfirmation) {
  //   return (
  //     <DeleteCommentForm
  //       comment={comment}
  //       onDelete={handleDelete}
  //       onCancel={handleCancel}
  //     />
  //   );
  // }

  return (
    <Card className="m-4">
      <p className="text-left px-2">
        Post Title: <strong>{comment.post?.title}</strong>
      </p>
      <CardBody>
        <p>
          {" "}
          Author:<em> {comment.userProfile?.displayName}</em>
        </p>
        <p>Subject: {comment.subject}</p>
        <p>Content: {comment.content}</p>
        <p>Creation date: {comment.createDateTime}</p>
        {/* <button onClick={() => setShowConfirmation(true)}>Delete</button> */}
        <button> <Link to={`/comments/${comment.id}/delete`}>Delete</Link></button>
      </CardBody>
    </Card>
  );
};






// export const Comment = ({ comment }) => {
//     console.log(comment);
//     return (
//         <Card className="m-4">
//           <p className="text-left px-2">Post Title: <strong>{comment.post?.title}</strong></p>
//           <CardBody>
//             <p> Author:<em> {comment.userProfile?.displayName}</em></p>
//             <p>Subject: {comment.subject}</p>
//             <p>Content: {comment.content}</p>
//             <p>Creation date: {comment.createDateTime}</p>
//           </CardBody>
//         </Card>
//       );



