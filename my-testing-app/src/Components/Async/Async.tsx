import { useEffect, useState } from "react";
import axios from 'axios';

const Async = () => {
    const [comments, setComments] = useState<Array<{ id: string, name: string }>>([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response: { data: Array<{ id: string, name: string }> }) => setComments(response.data))
    }, [])

    return (
        <div>
            <h3>Showing omments</h3>
            <ul>
                {comments.map(comment => <li key={comment.id}>{comment.name}</li>)}
            </ul>
        </div>
    )

}

export default Async;