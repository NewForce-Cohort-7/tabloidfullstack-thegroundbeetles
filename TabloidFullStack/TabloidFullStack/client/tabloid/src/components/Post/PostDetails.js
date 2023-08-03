import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { deletePost, getPostById } from "../../Managers/PostManager";
import CommentList from "../Comment/CommentList";




export const PostDetails = () => {
    const [post, setPost] = useState();
    const [showComments, setShowComments] = useState(false);
    const { id } = useParams();
    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser)
    const navigate = useNavigate()
    
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

    const editButton = () => {
      if (post.userProfileId === tabloidUserObject.id) {
        return <>
        <Button color="warning" onClick={() => navigate(`/posts/edit/${post.id}`)}>Edit</Button>
        </>
    }}

// The delete button is using the window.confirm method. 
// When the button is clicked a confirmation window display will pop up. 
// If yes is clicked the action will happen
// If cancel is clicked then nothing will happen



   const alertClick = () => {
    const confirmBox = window.confirm("Do you really want to delete this post?")
    if (confirmBox === true){
      handleDelete()
    }
      // else (window.confirm("Post not deleted!"))
    }
   



    const handleDelete = () => {
      deletePost(post.id).then(() => {
        navigate(`/my-posts`)
      });
    };


    const deleteButton = () => {
      if (post.userProfileId === tabloidUserObject.id) {
          return <button onClick={ alertClick } className="post-finish">Delete</button>}

          else {
            return ""
          }}

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
      {editButton()}
      <Button><Link to={`/posts/${post.id}/comments`}>Add Comment</Link></Button>
      {showComments && <CommentList />}
      <Button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "View Comments"}
      </Button>
      {deleteButton()}
</Card>    
);
};

