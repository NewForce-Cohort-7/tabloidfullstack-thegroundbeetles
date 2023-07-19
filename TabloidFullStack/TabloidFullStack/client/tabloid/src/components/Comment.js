import React from "react";
import { Card,CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Comment = ({ comment }) => {
    console.log(comment);
    return (
        <Card className="m-4">
          <p className="text-left px-2">Post Title: <strong>{comment.post?.title}</strong></p>
          <CardBody>
            <p> Author:<em> {comment.userProfile?.displayName}</em></p>
            <p>Subject: {comment.subject}</p>
            <p>Content: {comment.content}</p>
            <p>Creation date: {comment.createDateTime}</p>
          </CardBody>
        </Card>
      );

//   return (
//     <div className="comment">
//       <p className="text-left px-2">Author: {comment.userProfile.DisplayName}</p>
//       <p>Subject: {comment.subject}</p>
//       <p>Content: {comment.content}</p>
//       <p>Creation date: {comment.createDateTime}</p>
//     </div>
//   );
};

