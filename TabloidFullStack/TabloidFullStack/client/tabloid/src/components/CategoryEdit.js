import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById, editCategory } from "../Managers/CategoryManager";
import { Button } from "reactstrap";

export const EditCategory = () => {
    const [category, update] = useState({
        name: "",
    })

    const { categoryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCategoryById(categoryId)
            .then((categoryArray) => {
                update(categoryArray)
            })
    }, []);

    //makes sure the new updates are saved and takes user back to category list.
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        editCategory(category)
        .then(() => {
            navigate("/category")
        })
    }

    return (
        <form className="edit-form">
            <h2 className="edit-form-name">Rename your Category</h2>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={category.Name}
                            onChange={
                                (event) => {
                                    const copy = { ...category }
                                    copy.Name = event.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
           
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">Save</button>
        </form>
    );
};
export default EditCategory;