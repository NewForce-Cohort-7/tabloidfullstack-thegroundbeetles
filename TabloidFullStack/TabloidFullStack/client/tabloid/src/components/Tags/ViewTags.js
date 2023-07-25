import { useState, useEffect } from "react";
import { getAllTags } from "../../Managers/TagManager";
import { Tag } from "./Tag";
import { useNavigate } from "react-router-dom";

export const ViewTags = () => {
  
  const [Tags, setTags] = useState([])

  const navigate = useNavigate();

  const fetchTags = () => {
    getAllTags().then(allTags => setTags(allTags));
  }
  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="container">
    <div className="row justify-content-center">
    <button onClick={() => navigate("/tags/add")}>Create New Tag</button>
    <div className="cards-column">
          {Tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
    </div>
    </div>
    </div>
  );

};



    