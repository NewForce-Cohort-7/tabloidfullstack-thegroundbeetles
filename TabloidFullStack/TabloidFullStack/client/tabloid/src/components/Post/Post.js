import React from "react";
import { Card, CardBody } from "reactstrap";

export const Post = ({post}) => {
    return (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>{post.title}</ListGroup.Item>
            <ListGroup.Item>{`${post.userProfile.firstname} ${post.userProfile.lastname}`}</ListGroup.Item>
            <ListGroup.Item>{post.category.name}</ListGroup.Item>
          </ListGroup>
        </Card>
      );
}