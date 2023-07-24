import React, { useState, useEffect } from "react";

// import { getAllCategories } from "../APIManagers/CategoryManager";
import { Category } from "./Category";
import { getAllCategories } from "../Managers/CategoryManager";
import { useNavigate } from "react-router-dom";


const CategoryList = () => {
  const [categories, setCategory] = useState([]);
  const navigate = useNavigate();
  const getCategories = () => {
    getAllCategories().then(allCategories => setCategory(allCategories)); 
  };

  useEffect(() => {
    getCategories();
  }, []); 


return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
      <button onClick={() => navigate("/category/add")}>Create Category</button>
    </div>
     
  
   

  );
};




export default CategoryList;