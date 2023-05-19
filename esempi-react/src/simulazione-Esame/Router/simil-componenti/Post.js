import { useState, useEffect } from "react";

export function Post({ id }) {

    const [post, setPost] = useState([])
    useEffect(() => {
        async function fetchpost() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            let json = await res.json()
            setPost(json)
        }
        fetchpost()
    }, [id])
    //console.log(post);

    const [comments, setComments] = useState([])
    useEffect(() => {
        async function fetchcomments() {
            let res = await fetch(' https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            let json = await res.json()
            setComments(json)
        }
        fetchcomments()
    }, [id])

    console.log(comments);
    return (
        <div className="posts">
            <div className="postUtente">
                <h1>Post {id}</h1>
                <h3>{post.title}</h3>
                <div className="message">{post.body}</div>
            </div>
            <div className="comments">
                {comments.map((el) => (
                    <div className="comment">
                        <h4> Utente {el.name}: {el.id}</h4>
                        <p>{el.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}