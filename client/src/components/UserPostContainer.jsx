 import { Grid  } from "@radix-ui/themes"
import { useState, useEffect, useContext } from "react"
import { truncateContent, formatDate, sortPosts } from "../lib/helperFunctions"
import { Link } from "react-router-dom"
import Post from "./Post"
import { UserContext } from "./context/UserContext"



export default function UserPostContainer () {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext)


  useEffect(() => {
    const fetchPosts = async() => {
        const endpoint = `http://localhost:4001/users/${user.id}/posts`;
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
              const sortedData = sortPosts(parsedData);
              setPosts(sortedData);
            }
        } catch(error) {
            console.log(error)
        }
      }
      fetchPosts();
  }, [user]);

    console.log(user)

    return (
        <>
          <Grid columns="4" gap="4" rows="repeat(1, 350px)" width="auto" className="px-32 pt-12">
            {
                posts.map((post, index) => (
                   <Link key={index} to={`/postdetail/${post.id}`}>
                    <Post key={index}
                      title={truncateContent(post.title, 23)}
                      content={truncateContent(post.content, 100)}
                      datePosted={formatDate(post.createdAt)}
                    />
                   </Link>
                ))
            }
          </Grid>
        </>
    )
}