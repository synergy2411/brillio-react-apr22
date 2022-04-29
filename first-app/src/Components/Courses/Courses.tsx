import { Link, useHistory, useLocation } from "react-router-dom";

const Courses = () => {

    const history = useHistory();
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const isAscendingOrder = query.get('order') === 'asc'

    const orderClickHandler = () => {
        history.push("/courses?order=" + (isAscendingOrder ? 'desc' : 'asc'))
    }

    return (
        <div>
            <p className="display-4 text-center">All Courses</p>
            <div className="row">
                <div className="col-4">
                    <ul>
                        <li>
                            <Link to="/courses/angular/40">Angular</Link>
                        </li>
                        <li>
                            <Link to="/courses/react/60">React</Link>
                        </li>
                        <li>
                            <Link to="/courses/node/80">Node</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-8">
                    <button className="btn btn-primary" onClick={orderClickHandler}>
                        {isAscendingOrder ? 'Decending' : 'Ascending'}    
                    </button>
                </div>
            </div>

            <hr />

            {/* <Route path="/courses/:course">
                <Course />
            </Route> */}

            {/* <Route path="/courses/angular">
                <h6>Angular for beginners |  duration : 40hrs</h6>
            </Route>
            <Route path="/courses/react">
                <h6>React for beginners |  duration : 60hrs</h6>
            </Route>
            <Route path="/courses/node">
                <h6>Node for beginners |  duration : 80hrs</h6>
            </Route> */}
        </div>
    )

}

export default Courses;