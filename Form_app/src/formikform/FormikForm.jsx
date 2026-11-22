import { useFormik } from 'formik'
import React from 'react'
import { FormSchema } from './FormSchema'

function FormikForm() {
     
    const  formInitialValues = {
        name:"",
        email:"",
        age:"",
        pass:"",
        cpass:""
    }


    const {handleChange,handleSubmit,values,errors,handleBlur,touched}  = useFormik({
     initialValues:formInitialValues,
    validationSchema:FormSchema,

    onSubmit:(values,action)=>{
        console.log(values)
        console.log(values.name)
        console.log(values.email)
        console.log(values.age)
        console.log(values.pass)
        console.log(values.cpass)
        action.resetForm();
    }

})

  return (
    <div>
        <h1>Formik demo</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">enter name : </label>
            <input type="text" name='name' onChange={handleChange} onBlur={handleBlur} value={values.name}/>
            <br />
            {/* <span style={{color:"red"}}>{errors.name}</span> */}
            {errors.name && touched.name ?( <span style={{color:"red"}}>{errors.name}</span> ):""}
            <br /><br />

              <label htmlFor="">enter email : </label>
            <input type="text" name='email'  onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            <br />
            {/* <span style={{color:"red"}}>{errors.email}</span> */}
              {errors.email && touched.email ?(<span style={{color:"red"}}>{errors.email}</span>):""}
            <br /><br />

              <label htmlFor="">enter age : </label>
            <input type="text" name='age'  onChange={handleChange} onBlur={handleBlur} value={values.age}/>
            <br />
              {errors.age && touched.age ?(<span style={{color:"red"}}>{errors.age}</span>):""}
            <br /><br />

             <label htmlFor="">enter password : </label>
            <input type="password" name='pass'  onChange={handleChange} onBlur={handleBlur} value={values.pass}/>
            <br />
              {errors.pass && touched.pass ?(<span style={{color:"red"}}>{errors.pass}</span>):""}
            <br /><br />

            <label htmlFor="">enter Confirm password : </label>
            <input type="password" name='cpass'  onChange={handleChange} onBlur={handleBlur} value={values.cpass}/>
            <br />
              {errors.cpass && touched.cpass ?(<span style={{color:"red"}}>{errors.cpass}</span>):""}
            <br /><br />

            <input type="submit" />


        </form>
    </div>
  )
}

export default FormikForm