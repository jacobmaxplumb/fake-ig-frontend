import { useEffect, useState } from "react";
import { getUsersPosts } from "../services/user.service";

const Home = (props) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getUsersPosts().then(ps => {
            setPosts(ps);
        })
    })
    return (<div>
        {posts.map((p, i) => (
            <h1 key={i}>{p.content}</h1>
        ))}
    </div>)
}

export default Home;