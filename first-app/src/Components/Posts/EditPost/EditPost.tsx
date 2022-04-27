import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { IPost } from "../../../model/post.model";

const EditPost: React.FC<{ id: string }> = (props) => {

    const [post, setPost] = useState<IPost>();

    console.log(props);
    

    useEffect(() => {
        axios.get("http://localhost:3001/posts/" + props.id)
            .then(response => {
                setPost(response.data)
            }).catch(console.log)
    }, [props.id])

    return (
        <Fragment>
            <div className="backdrop"> </div>
            <div>{post?.title}</div>
            {/* <input type="text" value={body} /> */}
            <button className="btn btn-success">EDIT</button>
            <button className="btn btn-danger">DELETE</button>
        </Fragment>
    )

}

export default EditPost;