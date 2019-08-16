import React, { useContext } from "react";
import CourseGrid from "../Organisms/CourseGrid";
import CoursesContext from "../Context/CoursesContext";

const Courses = () => {
  const { courses } = useContext(CoursesContext);
  // return <CoursesContext.Consumer>{context => <CourseGrid courses={context.courses} />}</CoursesContext.Consumer>;
  return <CourseGrid courses={courses} />;
};

export default Courses;
