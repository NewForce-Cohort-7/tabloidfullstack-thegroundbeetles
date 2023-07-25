import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, ListGroup, ListGroupItem} from "reactstrap";

export const Post = ({ post }) => {
    return (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <Link to={`/posts/${post.id}`}><ListGroupItem>Post Title: {post.title}</ListGroupItem>
            </Link>
            <ListGroupItem>Post Author: {post?.userProfile?.displayName}</ListGroupItem>
            <ListGroupItem>Category: {post.category.name}</ListGroupItem>
          </ListGroup>
        </Card>
        
      );
};

