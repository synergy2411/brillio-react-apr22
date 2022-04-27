import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { IPost } from '../../model/post.model';

const BASE_URL : string = "http://localhost:3001/posts";

const Posts = () => {

    const [posts, setPosts] = useState<Array<IPost>>([]);

    useEffect(() => {
        axios.get(BASE_URL)
            .then(response => {
                setPosts(response.data)
            })
            .catch(console.log)
    }, [])

    return (
        <div className='row'>
            {
                posts.map(post => <div className='col-4' key={post.id}> {post.title} </div>)
            }
        </div>
    )

}

export default Posts;