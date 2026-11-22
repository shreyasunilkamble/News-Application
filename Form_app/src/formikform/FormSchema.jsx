import * as Yup from 'yup'

export const FormSchema = Yup.object({
     name : Yup.string().min(3,"Too short").max(20,"Too long").required('name is must'),
     email : Yup.string().email().required('email is must'),
     age : Yup.number().min(10).max(50).required("age is must"),
     pass : Yup.string().required("Password is must").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]),[A-Za-z\d@$!%*?&]{8,}$/,"Enter strong password"),
     cpass : Yup.string().required("confirm password is must").oneOf([Yup.ref('pass'),null],"Both password must be matched")
})