import { Link, Route } from "react-router-dom";
import Course from "./Course/Course";

const Courses = () => {

    return (
        <div>
            <p className="display-4 text-center">All Courses</p>    
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