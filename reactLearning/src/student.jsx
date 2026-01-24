import React from 'react'
import PropTypes from 'prop-types'


const Student = (props) => {
    console.log('props recieved:', props)
  return (
    <div>
      <p> {props.name} {props.age} {props.isStudent ? "yes":"No"} ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque doloribus illo similique voluptas, omnis, porro quae sit inventore ea consequatur ratione beatae!</p>
    </div>
  )
}

Student.propTypes = {

    name:PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool

}
Student.defaultProps = {
    name : "champu",
    age: 25,
    isStudent: true
}
export default Student
