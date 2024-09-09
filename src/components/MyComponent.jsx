import proptypes from 'prop-types'

const MyComponent = (props) => {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student:{ props.isStudent? "yes":"No"}</p>
       </div>
    )
}
MyComponent.proptypes = {
    name: proptypes.string,
    age: proptypes.number,
    isStudent:proptypes.bool
}
MyComponent.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default MyComponent;