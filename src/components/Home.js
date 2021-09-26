import { useEffect, useState } from "react";
import { getFriendsPosts } from "../services/feed.service";

const Home = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getFriendsPosts(props.user.uid).then(res => {
            setPosts(res);
        })
    }, [props.user])
    return (<div>
        {posts.map((p, i) => {
            return <h1 key={i}>{p.content}</h1>
        })}
    </div>)
}

export default Home;