import { useState } from "react"
import { addCategory}  from "../Managers/CategoryManager";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Card, CardBody, Label, Input, Button } from "reactstrap";


export const CategoryForm = () => {

    const [newCategory, update] = useState({
        Name: ""
        
    })

    const navigate = useNavigate();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const categoryToSendToAPI = {
            Name: newCategory.Name
            
        };

         addCategory(categoryToSendToAPI)
                .then(() => navigate("/category")); //takes user back to category list
    };

    return (
        <form className="category-form">
            <h2 className="category-form-name">Create a New Category</h2>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={newCategory.Name}
                            onChange={
                                (event) => {
                                    const copy = { ...newCategory }
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
export default CategoryForm;