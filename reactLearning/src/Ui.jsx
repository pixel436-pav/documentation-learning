import React from 'react'

const Ui = () => {
  return (
    <div>
      <body>
        React thinks that your nested components as a tree 
        <h2>UI as a Tree</h2>
        React represent UI as a tree , it uses tree structure to manage and model the relationship between react components 
        <h2>The Render Tree</h2>
        A major feature of components is the ability to compose components of other components. As we nest components, we have the concept of parent and child components, where each parent component may itself be a child of another component.
        When we render a React app, we can model this relationship in a tree, known as the render tree.
        Here is a React app that renders inspirational quotes   
        <p>
            Top-level components are the components nearest to the root component and affect the rendering performance of all the components beneath them and often contain the most complexity. Leaf components are near the bottom of the tree and have no child components and are often frequently re-rendered.
        </p>
        <h2>Module Dependency Tree</h2>
        <p>Another relationship in a React app that can be modeled with a tree are an app’s module dependencies. As we break up our components and logic into separate files, we create JS modules where we may export components, functions, or constants.

        Each node in a module dependency tree is a module and each branch represents an import statement in that module.

        If we take the previous Inspirations app, we can build a module dependency tree, or dependency tree for short.</p>
        
      </body>
    </div>
  )
}

export default Ui
