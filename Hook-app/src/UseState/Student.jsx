// import React, {useState} from 'react'

// function Student() {
//     const[student,setStudent] = useState({
//         name : "anju",
//         subject : "BCA",
//         city: "Pune",
//         isStudent: true,
//         age:22    
//     })
//     const ChangeData = ()=>{
//       setStudent({...student,subject:"javascript"

//       })
//     }
//   return (
//     <div>
//         <h1>Student Name {student.name}</h1>
//             <h1>Student subject {student.subject}</h1>   
//              <h1>Student city {student.city}</h1>   
//              <h1>Student isStudent {student.isStudent.toString()}</h1>
//             <h1>Student age {student.age}</h1>

//             <button onClick={ChangeData}>Change data</button>
//     </div>
//   )
// }

// export default Student


// import React, {useState} from 'react'

// function Student() {
//    const [college,setCollege] = useState({
//        name : "AT clg ",
//        id : "at123",
//        phone : 1234
//    })

//    const reset = ()=>{
//     setCollege({...college,phone:5678})
//    }

//   return (
//     <div>
//       <h1>College name : {college.name} </h1>
//        <h1>College id : {college.id} </h1>
//         <h1>College phone : {college.phone} </h1>
//         <button onClick={reset}>Reset Value</button>
//     </div>
//   )
// }

// export default Student


import React,{useState} from 'react'

function Student() {
  const [color,setColor] = useState({
     light : "skyblue",
     dark : "black"
  })

  return (
    <div>
      <h1>Color light : {color.light}</h1>
      <h1>Color dark  : {color.dark}</h1>
    </div>
  )
}

export default Student
