import { Grid  } from "@radix-ui/themes"
import { useState, useEffect } from "react"
import Post from "./Post"

export default function PostContainer () {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async() => {
        const endpoint = 'http://localhost:4001/posts';
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
              setPosts(parsedData);
            }
        } catch(error) {
            console.log(error)
        }
      }
      fetchPosts();
  }, []);
  
  





    return (
        <>
          <Grid marg columns="4" gap="4" rows="repeat(1, 280px)" width="auto" className="px-32">
            {
                posts.map((post, index) => (
                    <Post key={index}
                      title={post.title}
                      content={post.content}
                    />
                ))
            }
          </Grid>
        </>
    )
}