/* eslint-disable react/prop-types */
import { Grid  } from "@radix-ui/themes"
import { useState, useEffect } from "react"
import { truncateContent, formatDate, sortPosts } from "../lib/helperFunctions"
import { Link } from "react-router-dom"
import Post from "./Post"


export default function PostContainer ({ sortCriteria }) {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    const fetchPosts = async() => {
        const endpoint = `${import.meta.env.VITE_BASE_URL}posts`;
        const token = localStorage.getItem("token");
        try {
         const response = await fetch(endpoint, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
          })
            if(response.ok) {
              const parsedData = await response.json();
              const sortedData = sortPosts(parsedData, sortCriteria);
              setPosts(sortedData);
            }
        } catch(error) {
            console.log(error)
        }
      }
      fetchPosts();
  }, [sortCriteria]);

  
  

    return (
        <>
          <Grid columns="4" gap="4" rows="repeat(1, 350px)" width="auto" className="px-32 pt-12">
            {
                posts.map((post, index) => (
                   <Link key={index} to={`/postdetail/${post.id}`}>
                    
                    <Post key={index}
                      title={truncateContent(post.title, 23)}
                      content={truncateContent(post.content, 80)}
                      datePosted={formatDate(post.createdAt)}
                      comments={post.comments.length}
                    />
                   </Link>
                ))
            }
          </Grid>
        </>
    )
}