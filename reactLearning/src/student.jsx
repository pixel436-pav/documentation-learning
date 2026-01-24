import React from 'react'

const Student = (props) => {
  return (
    <div>
      <p> {props.name} {props.age} {props.isStudent ? "yes":"No"} ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque doloribus illo similique voluptas, omnis, porro quae sit inventore ea consequatur ratione beatae!</p>
    </div>
  )
}

export default Student
