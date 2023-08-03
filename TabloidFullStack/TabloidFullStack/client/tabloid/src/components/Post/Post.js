import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, ListGroup, ListGroupItem} from "reactstrap";
import { PostEdit } from "./PostEdit";
import { editPost } from "../../Managers/PostManager";

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

