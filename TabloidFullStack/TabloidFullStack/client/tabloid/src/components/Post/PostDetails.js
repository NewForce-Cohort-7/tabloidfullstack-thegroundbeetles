import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getPost } from "../APIManagers/PostManager";
import { useParams } from "react-router-dom";
import { Post } from "./Post";
import Card from 'react-bootstrap/Card';

const PostDetails = () => {
    const [post, setPost] = useState();
    const { id } = useParams();
  
    useEffect(() => {
      getPost(id).then(setPost);
    }, []);
  
    if (!post) {
      return null;
    }
}

return (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
)


export default PostDetails