import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, ListGroup, ListGroupItem} from "reactstrap";

export const Post = ({ post }) => {
    return (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroupItem>Post Author: {post.title}</ListGroupItem>
            <Link to={`/posts/${post.id}`}>
            <ListGroupItem>Username: {`${post.userProfile.firstName} ${post.userProfile.lastName}`}</ListGroupItem></Link>
            <ListGroupItem>Category: {post.category.name}</ListGroupItem>
          </ListGroup>
        </Card>
        
      );
}

