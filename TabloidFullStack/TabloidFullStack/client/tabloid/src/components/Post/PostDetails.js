import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { getPostById } from "../../Managers/PostManager";
import CommentList from "../CommentList";


export const PostDetails = () => {
    const [post, setPost] = useState();
    const [showComments, setShowComments] = useState(false);
    const { id } = useParams();
    
    /* toggle function for controlling the visibility of the comment list:*/
    const toggleComments = () => {
      setShowComments((prevState) => !prevState);
    };
    
    
  
    useEffect(() => {
      getPostById(id).then(setPost);
    }, []);
  
    if (!post) {
      return null;
    }


return (
<Card style={{ width: '18rem' }} key={post.id}>
      <CardImg variant="top" src={post?.imageLocation} alt="Not found" />
      <CardBody>
        <CardTitle><b>Title: {post.title}</b></CardTitle>
        <CardText>
        {post.content}
        </CardText>
        <CardText>
          Posted on: {post.publishDateTime}
          </CardText>
        <CardText>
        Created by: {post?.userProfile?.displayName}
        </CardText>
      </CardBody> 
      <Button><Link to={`/posts/${post.id}/comments`}>Add Comment</Link></Button>
      
      {showComments && <CommentList />}
      <Button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "View Comments"}
      </Button>
</Card>    
);
};

