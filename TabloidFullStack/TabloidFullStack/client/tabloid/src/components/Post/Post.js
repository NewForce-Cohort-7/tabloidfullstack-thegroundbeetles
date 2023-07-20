import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, ListGroup, ListGroupItem} from "reactstrap";

export const Post = ({ post }) => {
    return (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroupItem>{post.title}</ListGroupItem>
            <ListGroupItem>{`${post.userProfile.firstName} ${post.userProfile.lastName}`}</ListGroupItem>
            <ListGroupItem>{post.category.name}</ListGroupItem>
          </ListGroup>
        </Card>
        
      );
}

