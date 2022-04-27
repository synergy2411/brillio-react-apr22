import axios from "axios";
import { useRef } from "react";

const AddPost : React.FC<{onAddData : () => void}>= (props) => {

    const titleInputRef = useRef<HTMLInputElement>(null)
    const bodyInputRef = useRef<HTMLInputElement>(null)

    const submitHandler : React.FormEventHandler = (event) => {
        event.preventDefault();
        console.log(titleInputRef.current?.value, bodyInputRef.current?.value);
        axios.post("http://localhost:3001/posts", {
                title : titleInputRef.current?.value,
                body : bodyInputRef.current?.value
        }).then(response => {
            // console.log(response)
            props.onAddData()
        }).catch(console.log)
    }
    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-body">
                    <form onSubmit={submitHandler}>
                        {/* title */}
                        <div className="form-group">
                            <label htmlFor="title">Title : </label>
                            <input type="text" name="title" className="form-control" ref={titleInputRef} />
                        </div>
                        {/* body */}
                        <div className="form-group">
                            <label htmlFor="body">Body :</label>
                            <input type="text" name="body" className="form-control" ref={bodyInputRef}/>
                        </div>
                        {/* button */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <button type="submit" className="btn btn-primary btn-block">Add Item</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn btn-warning btn-block">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost;