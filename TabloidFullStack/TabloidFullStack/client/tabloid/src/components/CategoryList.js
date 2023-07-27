import React, { useEffect, useState } from "react";
import { getAllCategories } from "../Managers/CategoryManager";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then(allCategories => setCategories(allCategories));
    };

    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
    }, []);

    const create = (e) => {
      navigate("/category/add")
    }

    return (  
        <><div>
        {categories.map((category) => (
          <div key={category.id}>
            <p>
              <strong>{category.name}</strong>
            </p>
            <Button
              color="danger"
              type="delete"
              onClick={() => navigate(`/category/delete/${category.id}`)}
              >
                Delete
              </Button>
            <Button
            color="warning"
            type="edit"
            onClick={() => navigate(`/category/edit/${category.id}`)}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
      <div>
          <Button color="info" onClick={create}>
            Create Category
          </Button>
        </div></>
      );
    };
    
    export default CategoryList;


// import React, { useState, useEffect, Fragment } from "react";
// import {deleteCategory, getCategoryById}from "../Managers/CategoryManager";
// import { Category } from "./Category";
// import { getAllCategories } from "../Managers/CategoryManager";
// import { useNavigate,useParams } from "react-router-dom";


// export const CategoryList = () => {
//   const [categories, setCategory] = useState([]);
//   const navigate = useNavigate();
//   const { categoryId } = useParams()

//   const getCategories = () => {
//     getAllCategories().then(allCategories => setCategory(allCategories)); 
//   };

  

//   useEffect(() => {
//     getCategoryById(categoryId)
//     .then((categoryData) => {
//         update(categoryData)
//     })
// }, [categoryId])

//   useEffect(() => {
//     getCategories();
//   }, []); 

  


// return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="cards-column">
//           {categories.map((category) => (
//             <>
//             <Category key={category.id} 
//             Category category={category} />
//             <Button
//               color="danger"
//               type="delete"
//               onClick={() => navigate(`/category/delete/${category.id}`)}
//               >
//                 Delete
//               </Button>
//               </>
//           ,
//               </div>
              
          
//          <div>
        
//       <div>
//       <button onClick={() => navigate("/category/add")}>Create Category</button>
   
//     </div>
//      </div>
  
   

//   ),




          
