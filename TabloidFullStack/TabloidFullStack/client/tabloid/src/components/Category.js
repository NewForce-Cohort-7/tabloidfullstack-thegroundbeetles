import React from "react";
import { Card} from "reactstrap";
import { Link } from "react-router-dom";


export const Category = ({ category }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Category Type: {category.name}</p>
      
      
    </Card>
  );
};