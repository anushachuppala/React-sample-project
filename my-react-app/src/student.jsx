import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
  name: propTypes.string,
  age: PropTypes.number,
  isStudent: propTypes.bool,
};

export default Student;
