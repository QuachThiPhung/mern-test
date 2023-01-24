import React from "react";
 
import { Route, Routes } from "react-router-dom";
 
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
 
const App = () => {
 return (
   <div>
     <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
       <h3 className="d-flex justify-content-center">Student Management Dashboard</h3>
      </div>
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
     <Navbar />
   </div>
 );
};
 
export default App;