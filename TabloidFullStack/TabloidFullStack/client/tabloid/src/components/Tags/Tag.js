import React from "react";
import { Card} from "reactstrap";

export const Tag = ({ tag }) => {
    return (
    <Card>
      <p>Tag Name: {tag.name}</p>
      
      
    </Card>
    );
};