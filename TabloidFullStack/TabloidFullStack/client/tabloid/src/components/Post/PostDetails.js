import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { getPostById } from "../../Managers/PostManager";

export const PostDetails = () => {
    const [post, setPost] = useState();
    const { id } = useParams();
    
  
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
</Card>
    
    
);
};

