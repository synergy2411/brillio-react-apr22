import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { IPost } from '../../model/post.model';
import PostItem from './PostItem/PostItem';
import AddPost from './AddPost/AddPost';
import EditPost from './EditPost/EditPost';

const BASE_URL: string = "http://localhost:3001/posts";

const fetchData = (): Promise<IPost[]> => {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => reject(err))
    })
}

const Posts = () => {

    const [posts, setPosts] = useState<Array<IPost>>([]);
    const [selectedId, setSelectedId] = useState<string>('')

    const [showForm, setShowForm] = useState<boolean>(false);

    useEffect(() => {
        fetchData()
            .then((posts) => setPosts(posts))
            .catch(console.log)
    }, [])

    useEffect(()=>{
        fetchData()
            .then((posts) => setPosts(posts))
            .catch(console.log)
    }, [showForm, selectedId])

    const onAddData = () => {
        setShowForm(false)
    }

    const onItemSelect = (id: string) => {
        setSelectedId(id)
    }

    const onDeleteOrEditItem = () => {
        setSelectedId('');
    }
    return (
        <Fragment>
            <div className="row">
                <div className="col-6 offset-3">
                    <button className='btn btn-primary btn-block' onClick={() => setShowForm(!showForm)}>
                        {showForm ? 'Hide Form' : 'Add Item'}
                    </button>
                </div>
            </div>
            {showForm && <AddPost onAddData={onAddData} />}
            <br />
            {selectedId !== '' && <EditPost id={selectedId} onDeleteOrEditItem={onDeleteOrEditItem} />}
            <br />

            <div className='row'>
                {
                    posts.map(post => <PostItem key={post.id} post={post} onItemSelect={onItemSelect} />)
                }
            </div>
        </Fragment>
    )

}

export default Posts;