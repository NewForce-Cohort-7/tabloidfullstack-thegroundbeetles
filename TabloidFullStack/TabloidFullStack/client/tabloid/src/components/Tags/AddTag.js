import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTag } from "../../Managers/TagManager";

export const NewTagForm = () => {
    const [newTag, setNewTag] = useState({
        Name: ""
    });

    const navigate = useNavigate();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const tagToSendToApi = {
            Name: newTag.Name
        };
        addTag(tagToSendToApi)
        .then(() => navigate("/tags"));
    }

    return (
        <form>
            <fieldset>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={newTag.Name}
                            onChange={
                                (event) => {
                                    const copy = { ...newTag }
                                    copy.Name = event.target.value
                                    setNewTag(copy)
                                }
                            } />
                    </div>
            </fieldset>
           
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">Save</button>
        </form>
    );
};