import { useState, useEffect } from "react";
import { getAllTags } from "../../Managers/TagManager";
import { Tag } from "./Tag";

export const ViewTags = () => {
  
  const [Tags, setTags] = useState([])

  const fetchTags = () => {
    getAllTags().then(allTags => setTags(allTags));
  }
  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="cards-column">
          {Tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );

};



    