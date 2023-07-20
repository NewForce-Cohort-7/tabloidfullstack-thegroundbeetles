import { useState, useEffect } from "react";
import { getAllTags } from "../../Managers/TagManager";

export default function ViewTags() {
  
  const [Tags, setTags] = useState([])

  const fetchTags = () => {
    getAllTags().then(allTags => setTags(allTags));
  }
  useEffect(() => {
    fetchTags();
  }, [])
}

    