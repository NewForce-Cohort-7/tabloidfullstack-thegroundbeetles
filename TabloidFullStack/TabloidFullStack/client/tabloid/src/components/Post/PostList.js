import { useEffect, useState } from "react"
import { getAllPosts } from "../../Managers/PostManager";
import { Post } from "./Post";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const PostList = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const getPosts = () => {
        getAllPosts().then(allPosts => setPosts(allPosts));
    }

    useEffect(() => {
        getPosts();
    }, [])

    
    //The Table is put here while the contents are in Post.js. This way the header doesn't pop up for each post
    return (<>
    <button
            onClick={() => navigate("/posts/add")}
            
            
            className="btn btn-primary">
                Create Post
            </button>
      <div className="post-list">
        <div className="row justify-content-center">
          <div className="cards-column">
            
              {posts.map((post) => {
                // console.log(post)
                return  <Post post={post} />
              })}
            
          </div>
        </div>
      </div>
    
    </>
    )
}