import { IPost } from "../../../model/post.model";

const PostItem : React.FC<{post : IPost, onItemSelect : (id : string) => void}> = (props) => {

    return (
        <div className="col-4" style={{'cursor' : 'pointer'}} 
            onClick={() => props.onItemSelect(props.post.id)}>
            <div className="card">
                <div className="card-header">
                    <h6 className="text-center"> {props.post.title.toUpperCase()} </h6>
                </div>
            </div>
        </div>
    )
}

export default PostItem;