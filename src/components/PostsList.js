import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  // To get Posts List
  const getApiData = async () => {
    let res = await axios.get("https://dummyjson.com/posts");
    setPosts(res.data.posts);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    // render all posts
    <div className="container">
      {" "}
      {/* display all card in flex */}
      {posts.map((post, index) => {
        // card component is used to show data card
        return <Post key={index} data={post} />;
      })}
    </div>
  );
};

export default PostsList;
