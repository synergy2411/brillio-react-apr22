import { useParams } from "react-router-dom";

const Course = () => {
    const params = useParams<{ course: string, duration: string }>()

    return <h5>{params.course.toUpperCase()} Course | Duration : {params.duration}Hrs</h5>
}

export default Course;