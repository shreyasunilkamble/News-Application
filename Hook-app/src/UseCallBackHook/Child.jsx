import React from 'react'

function Child({click}) {
    console.log("Child re-render ")
  return (
    <div>
        <button onClick={click}>child button</button>
    </div>
  )
}

// export default React.memo(Child)
export default Child