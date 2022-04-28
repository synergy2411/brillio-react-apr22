import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { IPost } from "../../../model/post.model";
import classes from './EditPost.module.css';

const EditPost: React.FC<{ id: string, onDeleteItem : () => void }> = (props) => {

    const [post, setPost] = useState<IPost>();

    console.log(props);


    useEffect(() => {
        axios.get("http://localhost:3001/posts/" + props.id)
            .then(response => {
                setPost(response.data)
            }).catch(console.log)
    }, [props.id])

    const deletePostById = () => {
        axios.delete("http://localhost:3001/posts/"+props.id)
            .then(response => {
                props.onDeleteItem();
            })
            .catch(console.log)
    }

    return (
        <Fragment>
            <div className={classes['backdrop']}> </div>
            <div className={classes['edit-box']}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="text-center">{post?.title.toUpperCase()}</h6>
                            </div>
                            <div className="card-body">
                                {/* <input type="text" value={post?.body} className="form-control" /> */}
                                <br />
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-block btn-success">EDIT</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-block btn-danger"
                                            onClick={deletePostById}>DELETE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </Fragment>
    )
}

export default EditPost;