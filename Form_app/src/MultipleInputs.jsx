import React,{useState} from 'react'

function MultipleInputs() {
    const[data,setData] = useState({
        name:"",
        email:"",
        comment:"",
        selectMenu:"",
        check:false
    });

    const handleChange = (e) =>{
        const {name,value,checked,type} = e.target;

        const newValue = type === "checkbox" ? checked:name=== "email"? value.toLowerCase().replace("#","@"): value;

        setData((prev)=>({
            ...prev,
            [name]:newValue,
        }));
        };

        const handleSubmit = (e)=>{
            e.preventDefault();

            console.log("Complete Data:" + data);
            console.log("Checkbox Value:"+ data.check);
        };
  return (
    <div>
        <form onSubmit={ handleSubmit}>
            <label htmlFor="">Enter Name : </label>
            <input type="text" value={data.name} name="name" onChange={handleChange} placeholder="Enter Name"/><br /><br />

            <label htmlFor="">Enter Email : </label>
            <input type="text" value={data.email} name="email"  onChange={handleChange} placeholder="Enter Email" /><br /><br />

            <label htmlFor="" style={{verticalAlign:"top"}}>Enter Comments : </label>
            <textarea cols="30" rows="5" value={data.comment} name="comment" onChange={handleChange}></textarea><br /><br />

            <label htmlFor="">Select city : </label>
            <selec id="" value={data.selectMenu} name="selectMenu" onChange={handleChange}>
                <option value="">Pune</option>
                <option value="">Delhi</option>
                <option value="">Mumbai</option>
                <option value="">Other</option>
            </selec><br /><br />

            <label htmlFor="">I Accept Terms and Condition...</label>
            <input type="checkbox" checked={data.check} name="check" onChange={handleChange}/><br /><br />

            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default MultipleInputs