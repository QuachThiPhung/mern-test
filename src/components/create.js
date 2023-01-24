import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   age: "",
   email: "",
   ID: "",
   role: "",
 });
 const navigate = useNavigate();
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
 
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", age: "", email: "", ID: "", role: "" });
   navigate("/");
 }
 
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           required
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="age">Age</label>
         <input
           type="number"
           className="form-control"
           id="age"
           required
           value={form.age}
           onChange={(e) => updateForm({ age: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email</label>
         <input
           type="email"
           className="form-control"
           id="email"
           required
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ID">ID</label>
         <input
           type="text"
           className="form-control"
           id="ID"
           required
           value={form.ID}
           onChange={(e) => updateForm({ ID: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="roleOptions"
             id="roleTeacher"
             value="Teacher"
             checked={form.role === "Teacher"}
             onChange={(e) => updateForm({ role: e.target.value })}
           />
           <label htmlFor="roleTeacher" className="form-check-label">Teacher</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="roleOptions"
             id="roleStudent"
             value="Student"
             checked={form.role === "Student"}
             onChange={(e) => updateForm({ role: e.target.value })}
           />
           <label htmlFor="roleStudent" className="form-check-label">Student</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}