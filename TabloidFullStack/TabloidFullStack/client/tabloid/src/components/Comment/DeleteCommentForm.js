import React from "react";
import { Card, CardBody } from "reactstrap";
import { useParams } from "react-router-dom";
import { DeleteCommentsById } from "../../Managers/CommentManager";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const DeleteCommentForm = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
         DeleteCommentsById (id).then(() => navigate(`/posts/${id}`)
          )}

  return (
    <Card className="m-4">
      <h1>Are you Sure You Wish To Delete This Comment?</h1>
      
        <button onClick={handleDelete}>Delete</button>
        <button><Link to={`/posts/${id}`}>Cancel</Link>
</button>
     
    </Card>
  );
};

export default DeleteCommentForm;
