import { useState } from "react";

function AddTodo({onNewItem}){
  const [todoName, setTodoName]=useState("");
  const [dueDate, setDueDate]=useState("");
 
 
      const handleNameChange=(event)=>{
          setTodoName(event.target.value);
       };
      
       const handleDateChange=(event)=>{
        setDueDate(event.target.value);
      };


  const handleAddButtonClicked=()=>{
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
    
  }


   const getTodayDate=()=>{
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      
      return `${yyyy}-${mm}-${dd}`;
   }

return(
           
            <div className="d-flex justify-content-between">
                 <input   type="text" placeholder="Enter to do here" value={todoName}    onChange={handleNameChange}/>
                  <input className="w-50 ms-2" type="date" value={dueDate} onChange={handleDateChange} min={getTodayDate()}/>
                
                  <button type="button" className="btn btn-success ms-2" onClick={handleAddButtonClicked}>Add</button>
                
            </div>
                 
           
             
      );
}
export default AddTodo;